import { useTranslation } from "react-i18next";

export default function Accomp() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.journey.title")}</h1>

      <h2>{t("pages.journey.trainingTitle")}</h2>
      <p>{t("pages.journey.trainingText")}</p>

      <h2>{t("pages.journey.experienceTitle")}</h2>
      <p>{t("pages.journey.experienceText")}</p>

      <h2>{t("pages.journey.todayTitle")}</h2>
      <p>{t("pages.journey.todayText")}</p>
    </article>
  );
}
