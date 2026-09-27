import "../src/styles/contact-form.css";
import FooterRight from "../components/footerRight";

export default function Contact() {
  return (
    <article className="legal-page">
      <h1 className="contact-title">Contactez-moi</h1>
      {/* <p>
        Formulaire et coordonnées complètes à venir. En attendant, écrivez à{" "}
        <a href="mailto:contact@aliciasemenchuk.com">
          contact@aliciasemenchuk.com
        </a>
        .
      </p> */}

      <form className="contact-form">
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="lastname" className="contact-label">
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre nom"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="firstname" className="contact-label_2">
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre prénom"
            />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="phone" className="contact-label_2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre téléphone"
            />
          </div>
        </div>
        <label htmlFor="subject" className="contact-subject-label">
          Vous-etez ?
        </label>
        <div className="contact-form-row contact-form-row--subject-social">
          <select id="subject" name="subject" required>
            <option value="">Sélectionnez un sujet</option>
            <option value="1">Je suis un particulier</option>
            <option value="2">Une entreprise</option>
            <option value="3">Je souhaite poser une question</option>
            <option value="4">Je souhaite faire une suggestion</option>
            <option value="5">Je souhaite signaler un problème</option>
            <option value="6">Autre</option>
          </select>
          <FooterRight />
        </div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </article>
  );
}
