import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../src/styles/rdv.css";

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
  const [ready, setReady] = useState(Boolean(window.Calendly));

  useEffect(() => {
    if (!calendlyUrl) return;
    loadCalendlyAssets()
      .then(() => setReady(true))
      .catch(() => setReady(false));
  }, []);

  const openCalendly = useCallback(() => {
    if (!calendlyUrl || !window.Calendly) return;
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  }, []);

  return (
    <article className="legal-page rdv-page">
      <div className="rdv-card">
        <h1 className="rdv-title">{t("rdv.title")}</h1>
        <p className="rdv-intro">{t("rdv.intro")}</p>
        {calendlyUrl ? (
          <>
            <button
              type="button"
              className="btn-rdv rdv-trigger"
              disabled={!ready}
              onClick={openCalendly}
            >
              <span className="btn-rdv-link">{t("rdv.pickSlot")}</span>
            </button>
            <a
              className="rdv-fallback-link"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("rdv.openNewTab")}
            </a>
          </>
        ) : null}
      </div>
    </article>
  );
}
