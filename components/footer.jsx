import SiGnature from "../components/siGnature";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FooterRight from "./footerRight";
import { useCookieConsent } from "./CookieConsentProvider";

function FooterSep() {
  return (
    <span className="footer-dot" aria-hidden="true">
      {" "}
      ·{" "}
    </span>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const { openCookiePreferences } = useCookieConsent();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <SiGnature />
      </div>
      <div className="footer-legal">
        <p className="footer-copyright">{t("footer.copyright")}</p>
        <p className="footer-legal-links">
          <Link to="/contact" className="footer-link">
            {t("nav.contact")}
          </Link>
          <FooterSep />
          <Link to="/temoignages" className="footer-link">
            {t("footer.testimonials")}
          </Link>
          <FooterSep />
          <Link to="/mentions-legales" className="footer-link">
            {t("footer.legalNotice")}
          </Link>
          <FooterSep />
          <Link to="/politique-de-confidentialite" className="footer-link">
            {t("footer.privacy")}
          </Link>
          <FooterSep />
          <Link to="/cgv" className="footer-link">
            {t("footer.cgv")}
          </Link>
          <FooterSep />
          <Link to="/politique-cookies" className="footer-link">
            {t("footer.cookies")}
          </Link>
          <FooterSep />
          <Link to="/cgu" className="footer-link">
            {t("footer.cgu")}
          </Link>
          <FooterSep />
          <Link to="/mediation" className="footer-link">
            {t("footer.mediation")}
          </Link>
          <FooterSep />
          <Link to="/faq" className="footer-link">
            {t("footer.faq")}
          </Link>
          <FooterSep />
          <button
            type="button"
            className="footer-link footer-link--button"
            onClick={openCookiePreferences}
          >
            {t("footer.manageCookies")}
          </button>
          <FooterSep />
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
