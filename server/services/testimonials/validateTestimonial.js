/* eslint-env node */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateTestimonialPayload(raw) {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "invalid_body" };
  }

  const author = String(raw.author ?? "").trim();
  const email = String(raw.email ?? "")
    .trim()
    .toLowerCase();
  const text = String(raw.text ?? "").trim();
  const stars = Math.min(5, Math.max(1, parseInt(String(raw.stars), 10) || 5));
  const consentPublish =
    raw.consentPublish === true || raw.consentPublish === "true";

  if (!author || author.length > 80) {
    return { ok: false, error: "invalid_author" };
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "invalid_email" };
  }
  if (!text || text.length < 10 || text.length > 2000) {
    return { ok: false, error: "invalid_text" };
  }
  if (!consentPublish) {
    return { ok: false, error: "invalid_consent" };
  }

  return {
    ok: true,
    data: { author, email, text, stars, consentPublish: true },
  };
}