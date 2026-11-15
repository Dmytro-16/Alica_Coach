/* eslint-env node */
import { handleTestimonialPost } from "../../server/services/testimonials/handleTestimonialPost.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : (req.body ?? {});

  const result = await handleTestimonialPost(body);
  res.status(result.status).json(result.json);
}