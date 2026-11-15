import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TemoignageStars from "../components/temoignageStars";
import "../src/styles/temoignages.css";

export default function Témoignages() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setItems(data?.items ?? []))
      .catch(() => setItems([]));
  }, []);

  return (
    <article className="legal-page temoignages-page">
      <h1 className="temoignages-title">{t("temoignages.title")}</h1>
      <p className="temoignages-intro">{t("temoignages.intro")}</p>

      <div
        className="temoignages-grid-scroll"
        tabIndex={0}
        aria-label={t("temoignages.title")}
      >
        <ul className="temoignages-grid">
          {items.map((item) => (
            <li key={item.id} className="temoignage-card">
              <TemoignageStars count={item.stars} />
              <blockquote className="temoignage-text">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <p className="temoignage-author">&mdash; {item.author}</p>
            </li>
          ))}
        </ul>
      </div>
      {items.length === 0 ? (
        <p className="temoignages-empty">{t("temoignages.empty")}</p>
      ) : null}

      <p className="page-actions temoignages-actions">
        <Link to="/temoignages/submit" className="temoignages-tally-cta">
          {t("temoignages.shareCta")}
        </Link>
      </p>
    </article>
  );
}