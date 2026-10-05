import ButtonRDV from "./buttonRdv";

export default function FooterRight() {
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
        <p className="footer-text">Corps</p>
        <span className="footer-separator" aria-hidden="true" />
        <p className="footer-text">Esprit</p>
        <span className="footer-separator" aria-hidden="true" />
        <p className="footer-text">Equilibre</p>
        <span className="footer-separator" aria-hidden="true" />
        <p className="footer-text">Confiance</p>
      </div>
    </div>
  );
}
