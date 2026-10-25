import { useTranslation } from "react-i18next";
import "../src/styles/contact-form.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1 className="contact-title">{t("contact.title")}</h1>
      <p className="contact-intro">{t("contact.intro")}</p>
      <ContactForm />
    </article>
  );
}
