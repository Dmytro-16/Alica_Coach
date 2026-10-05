import { useTranslation } from "react-i18next";

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.privacy.title")}</h1>

      <h2>{t("pages.privacy.controllerTitle")}</h2>
      <p>
        {t("pages.privacy.controllerText")}{" "}
        <a href="mailto:contact@aliciasemenchuk.com">
          contact@aliciasemenchuk.com
        </a>
      </p>

      <h2>{t("pages.privacy.dataTitle")}</h2>
      <p>{t("pages.privacy.dataText")}</p>

      <h2>{t("pages.privacy.purposeTitle")}</h2>
      <p>{t("pages.privacy.purposeText")}</p>

      <h2>{t("pages.privacy.legalTitle")}</h2>
      <p>{t("pages.privacy.legalText")}</p>

      <h2>{t("pages.privacy.rightsTitle")}</h2>
      <p>
        {t("pages.privacy.rightsText")}{" "}
        <a href="mailto:contact@aliciasemenchuk.com">
          contact@aliciasemenchuk.com
        </a>
      </p>

      <h2>{t("pages.privacy.processorsTitle")}</h2>
      <p>{t("pages.privacy.processorsText")}</p>
    </article>
  );
}
