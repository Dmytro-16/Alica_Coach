import { createCheckoutSession } from "../lib/stripe/createCheckoutSession.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : (req.body ?? {});

  const result = await createCheckoutSession(req, body);
  res.status(result.status).json(result.json);
}
