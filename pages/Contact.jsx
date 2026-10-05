import { useTranslation } from "react-i18next";
import "../src/styles/contact-form.css";
import FooterRight from "../components/footerRight";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1 className="contact-title">{t("contact.title")}</h1>
      <p className="contact-intro">{t("contact.intro")}</p>

      <form className="contact-form">
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="lastname" className="contact-label">
              {t("contact.lastname")}
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder={t("contact.lastnamePh")}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="firstname" className="contact-label_2">
              {t("contact.firstname")}
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder={t("contact.firstnamePh")}
            />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.emailPh")}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="phone" className="contact-label_2">
              {t("contact.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("contact.phonePh")}
            />
          </div>
        </div>
        <label htmlFor="subject" className="contact-subject-label">
          {t("contact.subjectLabel")}
        </label>
        <div className="contact-form-row contact-form-row--subject-social">
          <select id="subject" name="subject" required>
            <option value="">{t("contact.subjectPh")}</option>
            <option value="1">{t("contact.subject1")}</option>
            <option value="2">{t("contact.subject2")}</option>
            <option value="3">{t("contact.subject3")}</option>
            <option value="4">{t("contact.subject4")}</option>
            <option value="5">{t("contact.subject5")}</option>
            <option value="6">{t("contact.subject6")}</option>
          </select>
          <FooterRight />
        </div>
        <label htmlFor="message">{t("contact.message")}</label>
        <textarea id="message" name="message" />
        <button type="submit">{t("contact.submit")}</button>
      </form>
    </article>
  );
}
