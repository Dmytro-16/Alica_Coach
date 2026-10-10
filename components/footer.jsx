import SiGnature from "../components/siGnature";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactSnippet from "./ContactSnippet";
import FooterRight from "./footerRight";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <SiGnature />
      </div>
      <div className="footer-legal">
        <ContactSnippet />
        <p className="footer-copyright">{t("footer.copyright")}</p>
        <p className="footer-legal-links">
          <Link to="/mentions-legales" className="footer-link">
            {t("footer.legalNotice")}
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/politique-de-confidentialite" className="footer-link">
            {t("footer.privacy")}
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/faq" className="footer-link">
            {t("footer.faq")}
          </Link>
          <span className="footer-dot" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <Link to="/paiement" className="footer-link">
            {t("footer.payment")}
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
