/* eslint-env node */
import "dotenv/config";
import express from "express";
import { validateContactPayload } from "../lib/contact/validateContact.js";
import { getDbName, getMongoClient } from "../lib/mongo/mongoClient.js";
import { createCheckoutSession } from "../lib/stripe/createCheckoutSession.js";
const PORT = Number(process.env.CONTACT_API_PORT) || 3001;
const COLLECTION = "contact_messages";

const app = express();
app.use(express.json({ limit: "32kb" }));

app.post("/api/contact", async (req, res) => {
  const validated = validateContactPayload(req.body);
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
});

app.post("/api/checkout", async (req, res) => {
  const result = await createCheckoutSession(req, req.body);
  res.status(result.status).json(result.json);
});

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "not_found" });
});

app.listen(PORT, () => {
  console.log(`API contact → http://localhost:${PORT}/api/contact`);
});
