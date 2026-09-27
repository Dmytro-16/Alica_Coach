import { Link } from "react-router-dom";

export default function ButtonRdv({ compact = false }) {
  const btnClass = compact ? "btn-rdv btn-rdv--compact" : "btn-rdv";

  return (
    <button type="button" className={btnClass}>
      <Link to="/rdv" className="btn-rdv-link">
        Prendre rendez-vous
      </Link>
    </button>
  );
}
