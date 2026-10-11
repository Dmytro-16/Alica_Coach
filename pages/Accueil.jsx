import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/home.css";

export default function Accueil() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <img
          className="home-hero-bg"
          src="/images/home/hero-provisoire.jpg"
          alt=""
          width={1400}
          height={788}
          fetchPriority="high"
          decoding="async"
        />
        <div className="home-hero-overlay" aria-hidden="true" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1 id="home-hero-title" className="home-hero-title">
              {t("pages.accueil.heroTitle")}
            </h1>
            <p className="home-hero-line">{t("pages.accueil.heroLine")}</p>
            <p className="home-hero-subtitle">
              {t("pages.accueil.heroSubtitle")}
            </p>
            <Link to="/accomplishments" className="home-hero-cta">
              {t("pages.accueil.heroCta")}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>

            <ul className="home-hero-pillars">
              <li>
                <i className="fa-solid fa-dumbbell" aria-hidden="true" />
                {t("pages.accueil.pillarSport")}
              </li>
              <li>
                <i className="fa-solid fa-seedling" aria-hidden="true" />
                {t("pages.accueil.pillarYoga")}
              </li>
              <li>
                <i className="fa-solid fa-dove" aria-hidden="true" />
                {t("pages.accueil.pillarLife")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <div className="home-about-grid">
            <figure className="home-about-visual">
              <img
                className="home-about-photo"
                src="/images/home/about-alicia.jpg"
                alt={t("pages.accueil.aboutImageAlt")}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="home-about-copy">
              <p className="home-about-eyebrow">
                {t("pages.accueil.aboutSectionEyebrow")}
              </p>
              <h2 id="home-about-title" className="home-about-title">
                {t("pages.accueil.aboutSectionHeading")}
              </h2>
              <p className="home-about-text">
                {t("pages.accueil.aboutSectionParagraph1")}
              </p>
              <p className="home-about-text">
                {t("pages.accueil.aboutSectionParagraph2")}
              </p>
              <Link to="/a-propos" className="home-hero-cta home-about-cta">
                {t("pages.accueil.aboutSectionLink")}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <figure className="home-about-quote-wrap">
              <blockquote className="home-about-quote">
                <p>
                  <span aria-hidden="true">« </span>
                  {t("pages.accueil.aboutSectionQuote")}
                  <span aria-hidden="true"> »</span>
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
