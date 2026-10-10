import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EMAIL = "contact@aliciasemenchuk.com";

export default function ContactSnippet() {
  const { t } = useTranslation();

  return (
    <div className="contact-snippet">
      {/* <a href={`mailto:${EMAIL}`} className="footer-link">
        {EMAIL}
      </a> */}
      <Link to="/contact" className="footer-link">
        {t("nav.contact")}
      </Link>
    </div>
  );
}
