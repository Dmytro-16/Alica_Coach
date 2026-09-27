import SiGnature from "../components/siGnature";
import { Link } from "react-router-dom";
import ContactSnippet from "./ContactSnippet";
import FooterRight from "./footerRight";

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
      <FooterRight />
    </footer>
  );
}

// YouTube LOGO
{
  /* <i class="fa-brands fa-youtube"></i> */
}
