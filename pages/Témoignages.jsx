import { useTranslation } from "react-i18next";
import temoignages from "../data/temoignages.json";
import TemoignageStars from "../components/temoignageStars";
import "../src/styles/temoignages.css";

const tallyUrl = import.meta.env.VITE_TALLY_URL?.trim() ?? "";

export default function Témoignages() {
  const { t } = useTranslation();

  return (
    <article className="legal-page temoignages-page">
      <h1 className="temoignages-title">{t("temoignages.title")}</h1>
      <p className="temoignages-intro">{t("temoignages.intro")}</p>
      <ul className="temoignages-grid">
        {temoignages.map((item) => (
          <li key={item.id} className="temoignage-card">
            <TemoignageStars count={item.stars} />
            <blockquote className="temoignage-text">"{item.text}"</blockquote>
            <p className="temoignage-author">— {item.author}</p>
          </li>
        ))}
      </ul>
      {tallyUrl ? (
        <div className="temoignages-tally">
          <a
            className="temoignages-tally-cta"
            href={tallyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("temoignages.shareCta")}
          </a>
        </div>
      ) : null}
    </article>
  );
}
