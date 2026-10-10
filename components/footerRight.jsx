import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ButtonRDV from "./buttonRdv";

const PILLARS = [
  "footer.pillarBody",
  "footer.pillarMind",
  "footer.pillarBalance",
  "footer.pillarConfidence",
];

export default function FooterRight() {
  const { t } = useTranslation();

  return (
    <div className="footer-right">
      <div className="footer-social">
        <ButtonRDV compact />

        <span className="footer-separator" aria-hidden="true" />
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
        <span className="footer-separator" aria-hidden="true" />
        <a
          className="footer-social-link"
          href="https://substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-substack"></i>
        </a>
      </div>
      <div className="footer-text-container">
        {PILLARS.map((key, index) => (
          <Fragment key={key}>
            {index > 0 ? (
              <span className="footer-separator" aria-hidden="true" />
            ) : null}
            <p className="footer-text">{t(key)}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
