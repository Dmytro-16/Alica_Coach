import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/pricing.css";

const PRICING_CARDS = [
  {
    id: "sport",
    badgeKey: "pages.pricing.badgeSport",
    titleKey: "pages.pricing.sportTitle",
    textKey: "pages.pricing.sportText",
    metaKey: "pages.pricing.sessionMeta",
    actions: "session",
  },
  {
    id: "yoga",
    badgeKey: "pages.pricing.badgeYoga",
    titleKey: "pages.pricing.yogaTitle",
    textKey: "pages.pricing.yogaText",
    metaKey: "pages.pricing.sessionMeta",
    actions: "session",
  },
  {
    id: "pack",
    badgeKey: "pages.pricing.badgePack",
    titleKey: "pages.pricing.offer2Title",
    textKey: "pages.pricing.offer2Text",
    metaKey: "pages.pricing.packMeta",
    actions: "pack",
  },
  {
    id: "custom",
    badgeKey: "pages.pricing.badgeCustom",
    titleKey: "pages.pricing.offer3Title",
    textKey: "pages.pricing.offer3Text",
    metaKey: "pages.pricing.customMeta",
    actions: "quote",
  },
];

function PricingCardActions({ type, t }) {
  if (type === "quote") {
    return (
      <div className="pricing-card-actions">
        <Link to="/contact" className="btn-rdv pricing-btn">
          {t("pages.pricing.ctaQuote")}
        </Link>
      </div>
    );
  }

  const payLabel =
    type === "pack"
      ? t("pages.pricing.ctaPayPack")
      : t("pages.pricing.ctaPay");

  return (
    <div className="pricing-card-actions">
      <Link to="/rdv" className="btn-rdv pricing-btn">
        {t("pages.pricing.ctaBook")}
      </Link>
      <Link to="/paiement" className="pricing-btn pricing-btn--secondary">
        {payLabel}
      </Link>
    </div>
  );
}

export default function Tarifs() {
  const { t } = useTranslation();

  return (
    <article className="legal-page pricing-page">
      <h1>{t("pages.pricing.title")}</h1>
      <p className="pricing-intro">{t("pages.pricing.intro")}</p>
      <p className="pricing-scroll-hint">{t("pages.pricing.scrollHint")}</p>

      <div className="pricing-scroll" tabIndex={0} aria-label={t("pages.pricing.offersAria")}>
        <ul className="pricing-grid pricing-grid--scroll">
          {PRICING_CARDS.map(
            ({ id, badgeKey, titleKey, textKey, metaKey, actions }) => (
              <li key={id} className="pricing-card">
                <span className="pricing-badge">{t(badgeKey)}</span>
                <h2 className="pricing-card-title">{t(titleKey)}</h2>
                <p className="pricing-card-meta">{t(metaKey)}</p>
                <p className="pricing-card-text">{t(textKey)}</p>
                <PricingCardActions type={actions} t={t} />
              </li>
            ),
          )}
        </ul>
      </div>

      <p className="pricing-disclaimer">{t("pages.pricing.disclaimer")}</p>
      <p className="page-actions">
        <Link to="/rdv">{t("pages.accomplishments.seeRdv")}</Link>
        <Link to="/contact">{t("nav.contact")}</Link>
      </p>
    </article>
  );
}
