import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import temoignages from "../data/temoignages.json";
import TemoignageStars from "../components/temoignageStars";
import "../src/styles/home.css";
import "../src/styles/temoignages.css";

const HOME_TESTIMONIALS = temoignages.slice(0, 3);

const HOME_APPROACH_PILLARS = [
  { labelKey: "footer.pillarBody", icon: "fa-heart-pulse" },
  { labelKey: "footer.pillarMind", icon: "fa-brain" },
  { labelKey: "footer.pillarBalance", icon: "fa-scale-balanced" },
  { labelKey: "footer.pillarConfidence", icon: "fa-star" },
];

const HOME_SERVICES = [
  {
    titleKey: "pages.accueil.service1Title",
    textKey: "pages.accueil.service1Text",
    icon: "fa-dumbbell",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service1ImageAlt",
  },
  {
    titleKey: "pages.accueil.service2Title",
    textKey: "pages.accueil.service2Text",
    icon: "fa-seedling",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service2ImageAlt",
  },
  {
    titleKey: "pages.accueil.service3Title",
    textKey: "pages.accueil.service3Text",
    icon: "fa-heart",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service3ImageAlt",
  },
];

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
                <i className="fa-solid fa-heart" aria-hidden="true" />
                {t("pages.accueil.pillarLife")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About section---------------------------------------------------------- */}
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

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-services-inner">
          <p className="home-services-eyebrow">
            {t("pages.accueil.servicesEyebrow")}
          </p>
          <h2 id="home-services-title" className="home-services-title">
            {t("pages.accueil.servicesHeadline")}
          </h2>
          <p className="home-services-intro">
            {t("pages.accueil.servicesText")}
          </p>
          <div className="home-services-grid">
            {HOME_SERVICES.map((service) => (
              <article key={service.titleKey} className="home-service">
                <img
                  className="home-service-photo"
                  src={service.imageSrc}
                  alt={t(service.imageAltKey)}
                  loading="lazy"
                  decoding="async"
                />
                <div className="home-service-body">
                  <i
                    className={`fa-solid ${service.icon} home-service-icon`}
                    aria-hidden="true"
                  />
                  <h3 className="home-service-title">{t(service.titleKey)}</h3>
                  <p className="home-service-text">{t(service.textKey)}</p>
                </div>
              </article>
            ))}
          </div>
          <Link to="/accomplishments" className="home-services-cta">
            {t("pages.accueil.servicesLink")}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="home-approach"
        aria-labelledby="home-approach-title"
      >
        <div className="home-approach-inner">
          <p className="home-approach-eyebrow">
            {t("pages.accueil.approachEyebrow")}
          </p>
          <h2 id="home-approach-title" className="home-approach-title">
            {t("pages.accueil.approachTitle")}
          </h2>
          <p className="home-approach-text">
            {t("pages.accueil.approachText")}
          </p>

          <ul className="home-approach-pillars">
            {HOME_APPROACH_PILLARS.map((pillar) => (
              <li key={pillar.labelKey} className="home-approach-pillar">
                <i
                  className={`fa-solid ${pillar.icon}`}
                  aria-hidden="true"
                />
                <span>{t(pillar.labelKey)}</span>
              </li>
            ))}
          </ul>

          <Link to="/a-propos#methode" className="home-hero-cta home-approach-cta">
            {t("pages.accueil.approachLink")}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="home-testimonials"
        aria-labelledby="home-testimonials-title"
      >
        <div className="home-testimonials-inner">
          <p className="home-testimonials-eyebrow">
            {t("pages.accueil.testimonialsEyebrow")}
          </p>
          <h2 id="home-testimonials-title" className="home-testimonials-title">
            {t("temoignages.title")}
          </h2>
          <p className="home-testimonials-teaser">
            {t("pages.accueil.testimonialsTeaser")}
          </p>

          <ul className="home-testimonials-grid">
            {HOME_TESTIMONIALS.map((item) => (
              <li key={item.id} className="temoignage-card">
                <TemoignageStars count={item.stars} />
                <blockquote className="temoignage-text">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <p className="temoignage-author">&mdash; {item.author}</p>
              </li>
            ))}
          </ul>

          <Link to="/temoignages" className="home-testimonials-cta">
            {t("pages.accueil.testimonialsLink")}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
