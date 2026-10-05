import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tarifs() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.pricing.title")}</h1>
      <p>{t("pages.pricing.intro")}</p>

      <h2>{t("pages.pricing.offer1Title")}</h2>
      <p>{t("pages.pricing.offer1Text")}</p>

      <h2>{t("pages.pricing.offer2Title")}</h2>
      <p>{t("pages.pricing.offer2Text")}</p>

      <h2>{t("pages.pricing.offer3Title")}</h2>
      <p>{t("pages.pricing.offer3Text")}</p>

      <p>{t("pages.pricing.disclaimer")}</p>
      <p>
        <Link to="/rdv">{t("rdv.cta")}</Link>
      </p>
    </article>
  );
}
