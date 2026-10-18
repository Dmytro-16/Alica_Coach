import { useTranslation } from "react-i18next";
import "../src/styles/content-page.css";

const JOURNEY_SECTIONS = [
  { titleKey: "pages.journey.trainingTitle", textKey: "pages.journey.trainingText" },
  { titleKey: "pages.journey.experienceTitle", textKey: "pages.journey.experienceText" },
  { titleKey: "pages.journey.todayTitle", textKey: "pages.journey.todayText" },
];

export default function MonParcours() {
  const { t } = useTranslation();

  return (
    <article className="legal-page content-page journey-page">
      <header className="content-page-header">
        <h1>{t("pages.journey.title")}</h1>
        <p className="content-page-lead">{t("pages.journey.intro")}</p>
      </header>

      <ul className="journey-timeline">
        {JOURNEY_SECTIONS.map((section) => (
          <li key={section.titleKey} className="journey-card">
            <h2>{t(section.titleKey)}</h2>
            <p>{t(section.textKey)}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
