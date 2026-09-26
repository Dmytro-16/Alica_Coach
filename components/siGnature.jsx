import { Link } from "react-router-dom";

export default function SiGnature() {
  return (
    <div className="signature-container">
      <h1>
        <Link to="/" className="signature-link">
          Alicia Semenchuk
        </Link>
      </h1>

      <div className="signature-text">
        <p>COACHE DE VIE</p>
        <span className="signature-separator" aria-hidden="true" />
        <p>COACHE SPORTIF</p>
        <span className="signature-separator" aria-hidden="true" />
        <p>COACH YOGA</p>
      </div>
    </div>
  );
}
