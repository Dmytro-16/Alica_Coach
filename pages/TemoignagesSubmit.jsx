import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../src/styles/contact-form.css";
import "../src/styles/temoignages.css";

export default function TemoignagesSubmit() {
  const { t } = useTranslation();
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState("5");
  const [consentPublish, setConsentPublish] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setFeedback("");

    try {
      const res = await fetch("/api/testimonials/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: author.trim(),
          email: email.trim(),
          text: text.trim(),
          stars: Number(stars),
          consentPublish,
        }),
      });

      if (!res.ok) {
        setFeedback(res.status === 404 ? "offline" : "error");
        return;
      }
    } catch {
      setFeedback("offline");
      return;
    }

    setAuthor("");
    setEmail("");
    setText("");
    setStars("5");
    setConsentPublish(false);
    setFeedback("success");
  }

  return (
    <article className="legal-page temoignages-page temoignages-submit-page">
      <h1 className="temoignages-title">{t("temoignages.formTitle")}</h1>
      <p className="temoignages-intro">{t("temoignages.submitIntro")}</p>

      <form className="contact-form temoignages-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="testimonial-author" className="contact-label">
            {t("temoignages.author")}
          </label>
          <input
            id="testimonial-author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            maxLength={80}
            placeholder={t("temoignages.authorPh")}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="testimonial-email" className="contact-label">
            {t("temoignages.email")}
          </label>
          <input
            id="testimonial-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={254}
            autoComplete="email"
            placeholder={t("temoignages.emailPh")}
          />
        </div>

        <div
          className="contact-field temoignages-field-stars"
          role="group"
          aria-labelledby="testimonial-stars-label"
        >
          <span id="testimonial-stars-label" className="contact-label">
            {t("temoignages.stars")}
          </span>
          <div className="temoignages-star-input">
            {[1, 2, 3, 4, 5].map((value) => {
              const filled = value <= Number(stars);
              return (
                <button
                  key={value}
                  type="button"
                  className={
                    filled
                      ? "temoignages-star-input-btn is-filled"
                      : "temoignages-star-input-btn"
                  }
                  onClick={() => setStars(String(value))}
                  aria-label={t("temoignages.starsCount", { count: value })}
                  aria-pressed={value === Number(stars)}
                >
                  {filled ? "★" : "☆"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="testimonial-text" className="contact-label">
            {t("temoignages.text")}
          </label>
          <textarea
            id="testimonial-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            minLength={10}
            maxLength={2000}
          />
        </div>

        <div className="contact-field temoignages-consent-field">
          <label className="temoignages-consent">
            <input
              type="checkbox"
              checked={consentPublish}
              onChange={(e) => setConsentPublish(e.target.checked)}
              required
            />
            <span className="temoignages-consent-text">
              {t("temoignages.consentPublish")}{" "}
              <Link
                to="/politique-de-confidentialite"
                className="temoignages-consent-link"
              >
                {t("temoignages.privacyLink")}
              </Link>
              .
            </span>
          </label>
        </div>

        <button type="submit">{t("temoignages.submit")}</button>
        {feedback === "success" && (
          <p className="contact-form-status" role="status">
            {t("temoignages.success")}
          </p>
        )}
        {feedback === "offline" && (
          <p
            className="contact-form-status contact-form-status--error"
            role="alert"
          >
            {t("temoignages.errorOffline")}
          </p>
        )}
        {feedback === "error" && (
          <p
            className="contact-form-status contact-form-status--error"
            role="alert"
          >
            {t("temoignages.error")}
          </p>
        )}
      </form>

      <p className="page-actions temoignages-actions">
        <Link to="/temoignages" className="temoignages-tally-cta">
          {t("temoignages.backToList")}
        </Link>
      </p>
    </article>
  );
}
