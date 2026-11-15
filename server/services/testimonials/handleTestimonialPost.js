/* eslint-env node */
import { insertTestimonial } from "./testimonialModel.js";
import { validateTestimonialPayload } from "./validateTestimonial.js";

export async function handleTestimonialPost(rawBody) {
  const validated = validateTestimonialPayload(rawBody);
  if (!validated.ok) {
    return { status: 400, json: { ok: false, error: validated.error } };
  }

  try {
    const id = await insertTestimonial(validated.data);
    return { status: 201, json: { ok: true, id, published: true } };
  } catch (err) {
    console.error("testimonials_create_error", err.message);
    return { status: 500, json: { ok: false, error: "server_error" } };
  }
}