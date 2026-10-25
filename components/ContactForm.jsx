import { useState } from "react";
import { useTranslation } from "react-i18next";
import FooterRight from "../components/footerRight";
import { getCurrentLocale } from "../src/i18n.js";

const EMPTY_FORM = {
  lastname: "",
  firstname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          locale: getCurrentLocale(),
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setFormData(EMPTY_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
            value={formData.lastname}
            onChange={handleChange}
            required
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
            value={formData.firstname}
            onChange={handleChange}
            required
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
            value={formData.email}
            onChange={handleChange}
            required
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
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="contact-field contact-field--subject">
        <label htmlFor="subject" className="contact-label">
          {t("contact.subjectLabel")}
        </label>
        <div
          className="contact-subject-row"
          aria-label={t("contact.asideAria")}
        >
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">{t("contact.subjectPh")}</option>
            <option value="1">{t("contact.subject1")}</option>
            <option value="2">{t("contact.subject2")}</option>
            <option value="3">{t("contact.subject3")}</option>
            <option value="4">{t("contact.subject4")}</option>
            <option value="5">{t("contact.subject5")}</option>
            <option value="6">{t("contact.subject6")}</option>
          </select>
          <div className="contact-form-aside">
            <FooterRight />
          </div>
        </div>
      </div>
      <label htmlFor="message">{t("contact.message")}</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        minLength={10}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("contact.sending") : t("contact.submit")}
      </button>
      {status === "success" && (
        <p className="contact-form-status" role="status">
          {t("contact.sent")}
        </p>
      )}
      {status === "error" && (
        <p className="contact-form-status contact-form-status--error" role="alert">
          {t("contact.error")}
        </p>
      )}
    </form>
  );
}
