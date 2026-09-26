import SiGnature from "../components/siGnature";
import { Link } from "react-router-dom";
import ContactSnippet from "./ContactSnippet";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <SiGnature />
      </div>
      <div className="footer-legal">
        <ContactSnippet />
        <p className="footer-copyright">© 2026 Alicia Semenchuk</p>
        <p className="footer-legal-links">
          <Link to="/mentions-legales" className="footer-link">
            Mentions légales
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/politique-de-confidentialite" className="footer-link">
            Politique de confidentialité
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/faq" className="footer-link">
            FAQ
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/paiement" className="footer-link">
            Paiement
          </Link>
        </p>
      </div>
      <div className="footer-right">
        <p className="footer-social">
          <a
            className="footer-social-link"
            href="https://www.instagram.com/aliciasemenchuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <span className="footer-separator" aria-hidden="true" />
          <a
            className="footer-social-link"
            href="https://www.tiktok.com/@aliciasemenchuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </p>
        <div className="footer-text-container">
          <p className="footer-text">Corps</p>
          <span className="footer-separator" aria-hidden="true" />
          <p className="footer-text">Esprit</p>
          <span className="footer-separator" aria-hidden="true" />
          <p className="footer-text">Equilibre</p>
          <span className="footer-separator" aria-hidden="true" />
          <p className="footer-text">Confiance</p>
        </div>
      </div>
    </footer>
  );
}

// YouTube LOGO
{
  /* <i class="fa-brands fa-youtube"></i> */
}
