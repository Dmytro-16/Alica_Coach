import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/accomplishments.css";
import { SERVICE_IMAGE_PATHS } from "../data/serviceImages.js";

const ACCOMP_META = [
  {
    titleKey: "pages.accueil.service1Title",
    leadKey: "pages.accueil.service1Text",
    detailKey: "pages.accomplishments.service1Detail",
    icon: "fa-dumbbell",
    imageAltKey: "pages.accueil.service1ImageAlt",
  },
  {
    titleKey: "pages.accueil.service2Title",
    leadKey: "pages.accueil.service2Text",
    detailKey: "pages.accomplishments.service2Detail",
    icon: "fa-seedling",
    imageAltKey: "pages.accueil.service2ImageAlt",
  },
  {
    titleKey: "pages.accueil.service3Title",
    leadKey: "pages.accueil.service3Text",
    detailKey: "pages.accomplishments.service3Detail",
    icon: "fa-heart",
    imageAltKey: "pages.accueil.service3ImageAlt",
  },
];

const ACCOMP_ITEMS = ACCOMP_META.map((item, index) => ({
  ...item,
  imageSrc: SERVICE_IMAGE_PATHS[index],
}));

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
              <h2>
                <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                {t(item.titleKey)}
              </h2>
              <p className="accomplishments-item-lead">{t(item.leadKey)}</p>
              <p className="accomplishments-item-detail">{t(item.detailKey)}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="page-actions">
        <Link to="/tarifs">{t("pages.accomplishments.seePricing")}</Link>
        <Link to="/rdv">{t("pages.accomplishments.seeRdv")}</Link>
      </p>
    </article>
  );
}
