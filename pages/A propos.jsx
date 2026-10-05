import { useTranslation } from "react-i18next";

export default function Apropos() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.about.title")}</h1>

      <h2>{t("pages.about.whoTitle")}</h2>
      <p>{t("pages.about.whoText")}</p>

      <h2>{t("pages.about.methodTitle")}</h2>
      <p>{t("pages.about.methodText")}</p>

      <h2>{t("pages.about.forWhoTitle")}</h2>
      <p>{t("pages.about.forWhoText")}</p>
    </article>
  );
}
