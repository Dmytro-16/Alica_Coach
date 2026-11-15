/* eslint-env node */
import { findPublishedTestimonials } from "./testimonialModel.js";

export async function handleTestimonialGet() {
  try {
    const items = await findPublishedTestimonials();
    return { status: 200, json: { ok: true, items } };
  } catch (err) {
    console.error("testimonials_list_error", err.message);
    return { status: 500, json: { ok: false, error: "server_error" } };
  }
}