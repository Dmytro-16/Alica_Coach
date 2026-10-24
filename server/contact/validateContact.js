const SUBJECT_IDS = new Set(["1", "2", "3", "4", "5", "6"]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(raw) {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "invalid_body" };
  }
  const lastname = String(raw.lastname ?? "").trim();
  const firstname = String(raw.firstname ?? "").trim();
  const email = String(raw.email ?? "")
    .trim()
    .toLowerCase();
  const phone = String(raw.phone ?? "").trim();
  const subject = String(raw.subject ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const locale = String(raw.locale ?? "fr")
    .trim()
    .slice(0, 5);
  if (!lastname || lastname.length > 80) {
    return { ok: false, error: "invalid_lastname" };
  }
  if (!firstname || firstname.length > 80) {
    return { ok: false, error: "invalid_firstname" };
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "invalid_email" };
  }
  if (phone.length > 30) {
    return { ok: false, error: "invalid_phone" };
  }
  if (!SUBJECT_IDS.has(subject)) {
    return { ok: false, error: "invalid_subject" };
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return { ok: false, error: "invalid_message" };
  }
  return {
    ok: true,
    data: {
      lastname,
      firstname,
      email,
      phone: phone || null,
      subject,
      message,
      locale,
    },
  };
}
