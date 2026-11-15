/* eslint-env node */
import { sendContactNotification } from "../email/sendContactNotification.js";
import { saveContactMessage } from "./saveContactMessage.js";
import { validateContactPayload } from "./validateContact.js";

export async function handleContactPost(rawBody) {
  const validated = validateContactPayload(rawBody);
  if (!validated.ok) {
    return { status: 400, json: { ok: false, error: validated.error } };
  }

  try {
    const id = await saveContactMessage(validated.data);
    const notify = await sendContactNotification(validated.data);
    if (!notify.ok && !notify.skipped) {
      console.error("contact_notify_error", notify.error);
    } else if (notify.skipped) {
      console.warn("contact_notify_skipped", notify.reason);
    }

    return { status: 201, json: { ok: true, id } };
  } catch (err) {
    console.error("contact_insert_error", err.message);
    return { status: 500, json: { ok: false, error: "server_error" } };
  }
}