import "../src/styles/contact-form.css";

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
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" />
        <label htmlFor="name">Prénom</label>
        <input type="text" id="name" name="name" placeholder="Votre prénom" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre email" />
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Votre téléphone"
        />
        <label htmlFor="subject">Vous-etez ?</label>
        <select id="subject" name="subject" required>
          <option value="">Sélectionnez un sujet</option>
          <option value="1">Je suis un particulier</option>
          <option value="2">Une entreprise</option>
          <option value="3">Je souhaite poser une question</option>
          <option value="4">Je souhaite faire une suggestion</option>
          <option value="5">Je souhaite signaler un problème</option>
          <option value="6">Autre</option>
        </select>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </article>
  );
}
