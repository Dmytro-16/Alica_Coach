import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Accueil() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.accueil.title")}</h1>
      <p>{t("pages.accueil.lead")}</p>

      <h2>{t("pages.accueil.approachTitle")}</h2>
      <p>{t("pages.accueil.approachText")}</p>

      <h2>{t("pages.accueil.servicesTitle")}</h2>
      <p>{t("pages.accueil.servicesText")}</p>

      <p>
        <Link to="/rdv">{t("rdv.cta")}</Link>
        {" · "}
        <Link to="/contact">{t("common.contactMe")}</Link>
      </p>
    </article>
  );
}
