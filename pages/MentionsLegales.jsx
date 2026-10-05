import { useTranslation } from "react-i18next";

export default function MentionsLegales() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.legalNotice.title")}</h1>

      <h2>{t("pages.legalNotice.editorTitle")}</h2>
      <p>
        {t("pages.legalNotice.editorText")}{" "}
        <a href="mailto:contact@aliciasemenchuk.com">
          contact@aliciasemenchuk.com
        </a>
      </p>

      <h2>{t("pages.legalNotice.directorTitle")}</h2>
      <p>{t("pages.legalNotice.directorText")}</p>

      <h2>{t("pages.legalNotice.hostTitle")}</h2>
      <p>{t("pages.legalNotice.hostText")}</p>

      <h2>{t("pages.legalNotice.ipTitle")}</h2>
      <p>{t("pages.legalNotice.ipText")}</p>

      <h2>{t("pages.legalNotice.creditsTitle")}</h2>
      <p>{t("pages.legalNotice.creditsText")}</p>
    </article>
  );
}
