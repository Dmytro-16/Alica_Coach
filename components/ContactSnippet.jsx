import { Link } from "react-router-dom";

const EMAIL = "contact@aliciasemenchuk.com";

export default function ContactSnippet() {
  return (
    <div className="contact-snippet">
      {/* <a href={`mailto:${EMAIL}`} className="footer-link">
        {EMAIL}
      </a> */}
      <span className="footer-dot" aria-hidden="true"></span>
      <Link to="/contact" className="footer-link">
        Contact
      </Link>
    </div>
  );
}
