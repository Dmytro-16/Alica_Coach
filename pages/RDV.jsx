import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/rdv.css";

const RDV_STEPS = ["rdv.step1", "rdv.step2", "rdv.step3"];
const rawCalendlyUrl = import.meta.env.VITE_CALENDLY_URL?.trim() ?? "";

/** Couleurs charte Alicia pour le widget Calendly (sans #). */
function calendlyUrlWithTheme(url) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("background_color", "f8f5ef");
    parsed.searchParams.set("primary_color", "b89558");
    parsed.searchParams.set("text_color", "242321");
    parsed.searchParams.set("hide_gdpr_banner", "1");
    return parsed.toString();
  } catch {
    return url;
  }
}

const calendlyUrl = rawCalendlyUrl ? calendlyUrlWithTheme(rawCalendlyUrl) : "";

function loadCalendlyAssets() {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    if (
      !document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]',
      )
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

export default function RDV() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ready, setReady] = useState(Boolean(window.Calendly));

  useEffect(() => {
    if (!calendlyUrl) return;
    loadCalendlyAssets()
      .then(() => setReady(true))
      .catch(() => setReady(false));
  }, []);

  useEffect(() => {
    function onCalendlyMessage(e) {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        if (window.Calendly?.closePopupWidget) {
          window.Calendly.closePopupWidget();
        }
        navigate("/paiement?from=rdv", { replace: true });
      }
    }

    window.addEventListener("message", onCalendlyMessage);
    return () => window.removeEventListener("message", onCalendlyMessage);
  }, [navigate]);

  const openCalendly = useCallback(() => {
    if (!calendlyUrl || !window.Calendly) return;
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  }, []);

  return (
    <article className="legal-page rdv-page">
      <h1>{t("rdv.title")}</h1>
      <p className="rdv-lead">{t("rdv.lead")}</p>

      <div className="rdv-columns">
        <div className="rdv-card">
          <p className="rdv-intro">{t("rdv.intro")}</p>
          {calendlyUrl ? (
            <div className="rdv-card-actions">
              <button
                type="button"
                className="btn-rdv rdv-trigger"
                aria-disabled={!ready}
                onClick={() => {
                  if (ready) openCalendly();
                }}
              >
                {t("rdv.pickSlot")}
              </button>
              <a
                className="rdv-fallback-link"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("rdv.openNewTab")}
              </a>
            </div>
          ) : null}
          <p className="rdv-pay-hint">{t("rdv.payAfterBooking")}</p>
        </div>

        <section className="rdv-steps" aria-labelledby="rdv-steps-title">
          <h2 id="rdv-steps-title" className="rdv-steps-title">
            {t("rdv.stepsTitle")}
          </h2>
          <ol className="rdv-steps-list">
            {RDV_STEPS.map((key, index) => (
              <li key={key} className="rdv-step">
                <span className="rdv-step-num" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="rdv-step-text">{t(key)}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <p className="rdv-help">
        {t("rdv.helpQuestion")} <Link to="/contact">{t("nav.contact")}</Link>
        <span className="rdv-help-sep" aria-hidden="true">
          ·
        </span>
        <Link to="/tarifs">{t("nav.pricing")}</Link>
      </p>
    </article>
  );
}
