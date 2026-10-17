import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/accomplishments.css";

const ACCOMP_ITEMS = [
  {
    titleKey: "pages.accueil.service1Title",
    leadKey: "pages.accueil.service1Text",
    detailKey: "pages.accomplishments.service1Detail",
    icon: "fa-dumbbell",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service1ImageAlt",
  },
  {
    titleKey: "pages.accueil.service2Title",
    leadKey: "pages.accueil.service2Text",
    detailKey: "pages.accomplishments.service2Detail",
    icon: "fa-seedling",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service2ImageAlt",
  },
  {
    titleKey: "pages.accueil.service3Title",
    leadKey: "pages.accueil.service3Text",
    detailKey: "pages.accomplishments.service3Detail",
    icon: "fa-heart",
    imageSrc: "/images/accomplishments/provisoire.avif",
    imageAltKey: "pages.accueil.service3ImageAlt",
  },
];

export default function Accomp() {
  const { t } = useTranslation();

  return (
    <article className="legal-page accomplishments-page">
      <h1>{t("pages.accomplishments.title")}</h1>
      <p className="accomplishments-intro">{t("pages.accomplishments.intro")}</p>

      <ul className="accomplishments-list">
        {ACCOMP_ITEMS.map((item) => (
          <li key={item.titleKey} className="accomplishments-item">
            <img
              className="accomplishments-item-photo"
              src={item.imageSrc}
              alt={t(item.imageAltKey)}
              loading="lazy"
              decoding="async"
            />
            <div className="accomplishments-item-body">
              <i
                className={`fa-solid ${item.icon} accomplishments-item-icon`}
                aria-hidden="true"
              />
              <h2 className="accomplishments-item-title">{t(item.titleKey)}</h2>
              <p className="accomplishments-item-lead">{t(item.leadKey)}</p>
              <p className="accomplishments-item-detail">{t(item.detailKey)}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="accomplishments-actions">
        <Link to="/tarifs">{t("pages.accomplishments.seePricing")}</Link>
        <Link to="/rdv">{t("pages.accomplishments.seeRdv")}</Link>
      </p>
    </article>
  );
}
