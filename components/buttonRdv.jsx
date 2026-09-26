import { Link } from "react-router-dom";

export default function ButtonRdv() {
  return (
    <button className="btn-rdv">
      <Link to="/rdv" className="btn-rdv-link">
        Prendre rendez-vous
      </Link>
    </button>
  );
}
