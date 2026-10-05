import temoignages from "../data/temoignages.json";
import TemoignageStars from "../components/temoignageStars";
import "../src/styles/temoignages.css";

const tallyUrl = import.meta.env.VITE_TALLY_URL?.trim() ?? "";

export default function Témoignages() {
  return (
    <article className="legal-page temoignages-page">
      <h1 className="temoignages-title">Témoignages</h1>
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
            Partagez votre expérience
          </a>
        </div>
      ) : null}
    </article>
  );
}
