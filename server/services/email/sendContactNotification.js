/* eslint-env node */
import { contactSubjectLabel } from "../contact/contactSubjectLabels.js";

function escapeText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailContent(data) {
  const subjectLabel = contactSubjectLabel(data.subject);
  const phoneLine = data.phone ? `Téléphone : ${data.phone}\n` : "";
  const text = [
    "Nouveau message depuis le formulaire de contact Alicia Coach",
    "",
    `Nom : ${data.lastname} ${data.firstname}`,
    `E-mail : ${data.email}`,
    phoneLine.trimEnd(),
    `Vous êtes : ${subjectLabel}`,
    `Langue : ${data.locale || "fr"}`,
    "",
    "Message :",
    data.message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const html = `
    <p>Nouveau message depuis le formulaire de contact <strong>Alicia Coach</strong>.</p>
    <ul>
      <li><strong>Nom :</strong> ${escapeText(data.lastname)} ${escapeText(data.firstname)}</li>
      <li><strong>E-mail :</strong> <a href="mailto:${escapeText(data.email)}">${escapeText(data.email)}</a></li>
      ${data.phone ? `<li><strong>Téléphone :</strong> ${escapeText(data.phone)}</li>` : ""}
      <li><strong>Vous êtes :</strong> ${escapeText(subjectLabel)}</li>
      <li><strong>Langue :</strong> ${escapeText(data.locale || "fr")}</li>
    </ul>
    <p><strong>Message :</strong></p>
    <p style="white-space:pre-wrap">${escapeText(data.message)}</p>
  `.trim();

  return {
    subject: `Contact Alicia Coach — ${data.firstname} ${data.lastname}`,
    text,
    html,
    replyTo: data.email,
  };
}

async function sendViaResend({ from, to, content }) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, skipped: true, reason: "missing_resend_api_key" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: content.subject,
      text: content.text,
      html: content.html,
      reply_to: content.replyTo,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return { ok: false, error: `resend_${res.status}: ${body.slice(0, 200)}` };
  }

  return { ok: true };
}

/** Brevo (Sendinblue) transactional SMTP API — optional if RESEND is not used */
async function sendViaBrevo({ to, content }) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_NOTIFY_FROM?.trim();
  const fromName =
    process.env.CONTACT_NOTIFY_FROM_NAME?.trim() || "Alicia Coach — contact";

  if (!apiKey || !fromEmail) {
    return { ok: false, skipped: true, reason: "missing_brevo_config" };
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: to }],
      replyTo: { email: content.replyTo },
      subject: content.subject,
      textContent: content.text,
      htmlContent: content.html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return { ok: false, error: `brevo_${res.status}: ${body.slice(0, 200)}` };
  }

  return { ok: true };
}

export async function sendContactNotification(data) {
  const to = process.env.CONTACT_NOTIFY_TO?.trim();
  if (!to) {
    return { ok: false, skipped: true, reason: "missing_contact_notify_to" };
  }

  const from = process.env.CONTACT_NOTIFY_FROM?.trim();
  const provider = (process.env.CONTACT_EMAIL_PROVIDER ?? "resend")
    .trim()
    .toLowerCase();
  const content = buildEmailContent(data);

  if (provider === "brevo") {
    return sendViaBrevo({ to, content });
  }

  if (!from) {
    return { ok: false, skipped: true, reason: "missing_contact_notify_from" };
  }

  return sendViaResend({ from, to, content });
}