import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/pricing.css";

const OFFERS = [
  { titleKey: "pages.pricing.offer1Title", textKey: "pages.pricing.offer1Text" },
  { titleKey: "pages.pricing.offer2Title", textKey: "pages.pricing.offer2Text" },
  { titleKey: "pages.pricing.offer3Title", textKey: "pages.pricing.offer3Text" },
];

export default function Tarifs() {
  const { t } = useTranslation();

  return (
    <article className="legal-page pricing-page">
      <h1>{t("pages.pricing.title")}</h1>
      <p className="pricing-intro">{t("pages.pricing.intro")}</p>

      <ul className="pricing-grid">
        {OFFERS.map(({ titleKey, textKey }) => (
          <li key={titleKey} className="pricing-card">
            <h2 className="pricing-card-title">{t(titleKey)}</h2>
            <p className="pricing-card-text">{t(textKey)}</p>
          </li>
        ))}
      </ul>

      <p className="pricing-disclaimer">{t("pages.pricing.disclaimer")}</p>
      <p className="pricing-cta">
        <Link to="/rdv">{t("rdv.cta")}</Link>
      </p>
    </article>
  );
}
