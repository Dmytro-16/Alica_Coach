import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/content-page.css";

export default function Apropos() {
  const { t } = useTranslation();

  return (
    <article className="legal-page content-page about-page">
      <header className="content-page-header">
        <h1>{t("pages.about.title")}</h1>
        <p className="content-page-lead">{t("pages.about.lead")}</p>
      </header>

      <div className="about-page-hero">
        <img
          className="about-page-photo"
          src="/images/home/about-alicia.jpg"
          alt={t("pages.accueil.aboutImageAlt")}
          loading="lazy"
          decoding="async"
        />
        <div>
          <h2>{t("pages.about.whoTitle")}</h2>
          <p>{t("pages.about.whoText")}</p>
        </div>
      </div>

      <section className="content-page-section" aria-labelledby="methode">
        <h2 id="methode">{t("pages.about.methodTitle")}</h2>
        <p>{t("pages.about.methodText")}</p>
      </section>

      <section className="content-page-section" aria-labelledby="about-forwho">
        <h2 id="about-forwho">{t("pages.about.forWhoTitle")}</h2>
        <p>{t("pages.about.forWhoText")}</p>
      </section>

      <p className="page-actions content-page-cta">
        <Link to="/mon-parcours" className="content-page-cta-link">
          {t("pages.about.journeyLink")}
        </Link>
      </p>
    </article>
  );
}
