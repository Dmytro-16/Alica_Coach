/* eslint-env node */
import { handleTestimonialGet } from "../server/services/testimonials/handleTestimonialGet.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const result = await handleTestimonialGet();
  res.status(result.status).json(result.json);
}