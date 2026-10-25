/* eslint-env node */
import { validateContactPayload } from "../lib/contact/validateContact.js";
import { getDbName, getMongoClient } from "../lib/mongo/mongoClient.js";

const COLLECTION = "contact_messages";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : (req.body ?? {});

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    res.status(400).json({ ok: false, error: validated.error });
    return;
  }

  try {
    const client = await getMongoClient();
    const doc = {
      ...validated.data,
      source: "contact_form",
      createdAt: new Date(),
    };

    const result = await client
      .db(getDbName())
      .collection(COLLECTION)
      .insertOne(doc);

    res.status(201).json({ ok: true, id: result.insertedId.toString() });
  } catch (err) {
    console.error("contact_insert_error", err.message);
    res.status(500).json({ ok: false, error: "server_error" });
  }
}
