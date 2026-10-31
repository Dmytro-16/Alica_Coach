import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../src/styles/payment.css";

const CHECKOUT_OFFERS = [
  {
    id: "seance",
    titleKey: "pages.pricing.offer1Title",
    textKey: "pages.pricing.offer1Text",
  },
  {
    id: "pack",
    titleKey: "pages.pricing.offer2Title",
    textKey: "pages.pricing.offer2Text",
  },
];

async function startCheckout(offer) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ offer }),
  });
  const data = await res.json();
  if (!res.ok || !data.url) {
    throw new Error(data.error || "checkout_failed");
  }
  window.location.href = data.url;
}

export default function Paiement() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const fromRdv = params.get("from") === "rdv";
  const checkout = params.get("checkout");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const paymentDone = checkout === "success";

  async function handlePay(offer) {
    setError(false);
    setLoading(offer);
    try {
      await startCheckout(offer);
    } catch {
      setError(true);
      setLoading(null);
    }
  }

  return (
    <article
      className={`legal-page payment-page${paymentDone ? " payment-page--done" : ""}`}
    >
      <h1>{t("pages.payment.title")}</h1>
      <p className="payment-intro">{t("pages.payment.p1")}</p>

      {checkout === "success" && (
        <div className="payment-banner payment-banner--success" role="status">
          {t("pages.payment.successMessage")}
        </div>
      )}
      {checkout === "cancel" && (
        <div className="payment-banner payment-banner--cancel" role="status">
          {t("pages.payment.cancelMessage")}
        </div>
      )}
      {fromRdv && !checkout && (
        <div className="payment-banner payment-banner--info" role="status">
          {t("pages.payment.afterRdv")}
        </div>
      )}
      {error && (
        <div className="payment-banner payment-banner--error" role="alert">
          {t("pages.payment.errorMessage")}
        </div>
      )}

      {paymentDone && (
        <p className="payment-done-actions page-actions">
          <Link to="/rdv">{t("pages.accomplishments.seeRdv")}</Link>
          <Link to="/">{t("common.backHome")}</Link>
        </p>
      )}

      <p className="payment-secure">{t("pages.payment.p2")}</p>

      <ul className="payment-grid" aria-label={t("pages.payment.offersAria")}>
        {CHECKOUT_OFFERS.map(({ id, titleKey, textKey }) => (
          <li key={id} className="payment-card">
            <h2 className="payment-card-title">{t(titleKey)}</h2>
            <p className="payment-card-text">{t(textKey)}</p>
            <button
              type="button"
              className="btn-rdv payment-pay-btn"
              disabled={loading !== null}
              onClick={() => handlePay(id)}
            >
              {loading === id
                ? t("pages.payment.payLoading")
                : t("pages.payment.payCta")}
            </button>
          </li>
        ))}
        <li className="payment-card payment-card--contact">
          <h2 className="payment-card-title">
            {t("pages.pricing.offer3Title")}
          </h2>
          <p className="payment-card-text">{t("pages.pricing.offer3Text")}</p>
          <Link to="/contact" className="payment-contact-link">
            {t("pages.payment.enterpriseContact")}
          </Link>
        </li>
      </ul>

      <p className="payment-disclaimer">{t("pages.pricing.disclaimer")}</p>

      <p className="page-actions">
        <Link to="/tarifs">{t("nav.pricing")}</Link>
        <Link to="/rdv">{t("pages.accomplishments.seeRdv")}</Link>
        <Link to="/contact">{t("nav.contact")}</Link>
      </p>
    </article>
  );
}
