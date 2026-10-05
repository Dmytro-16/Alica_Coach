import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Page404() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.notFound.title")}</h1>
      <p>{t("pages.notFound.text")}</p>
      <p>
        <Link to="/">{t("common.backHome")}</Link>
      </p>
    </article>
  );
}
