import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Apropos() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.about.title")}</h1>

      <h2>{t("pages.about.whoTitle")}</h2>
      <p>{t("pages.about.whoText")}</p>

      <h2 id="methode">{t("pages.about.methodTitle")}</h2>
      <p>{t("pages.about.methodText")}</p>

      <h2>{t("pages.about.forWhoTitle")}</h2>
      <p>{t("pages.about.forWhoText")}</p>

      <p>
        <Link to="/mon-parcours">{t("pages.about.journeyLink")}</Link>
      </p>
    </article>
  );
}
