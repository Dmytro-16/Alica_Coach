/**
 * Étape 3 — insère UN message test dans contact_messages.
 * Usage : npm run seed:contact
 */
import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();
if (!uri) {
  console.error("❌ MONGODB_URI manquant dans .env");
  process.exit(1);
}

const dbName = process.env.MONGODB_DB_NAME?.trim() || "alicia_coach";
const tlsInsecure =
  process.env.MONGODB_TLS_INSECURE === "true" ||
  process.env.MONGODB_TLS_INSECURE === "1";

if (tlsInsecure) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const testMessage = {
  lastname: "Martin",
  firstname: "Test",
  email: "test@example.com",
  phone: null,
  subject: "3",
  message: "Message de test étape 3 — formulaire contact Alicia.",
  locale: "fr",
  source: "test_script",
  createdAt: new Date(),
};

const client = new MongoClient(uri, {
  ...(tlsInsecure && {
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true,
  }),
});

try {
  await client.connect();
  const result = await client
    .db(dbName)
    .collection("contact_messages")
    .insertOne(testMessage);

  console.log("✅ Message test enregistré");
  console.log("   id :", result.insertedId.toString());
  console.log(`   base : ${dbName} / contact_messages`);
} catch (err) {
  console.error("❌ Erreur :", err.message);
  process.exit(1);
} finally {
  await client.close();
}
