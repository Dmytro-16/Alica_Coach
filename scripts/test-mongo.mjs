/**
 * Étape 2 — test connexion MongoDB Atlas (une fois, puis supprimable).
 * Usage : npm run test:mongo
 */
import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();
if (!uri) {
  console.error("❌ Ajoute MONGODB_URI dans ton fichier .env");
  process.exit(1);
}

const dbName = process.env.MONGODB_DB_NAME?.trim() || "alicia_coach";

const tlsInsecure =
  process.env.MONGODB_TLS_INSECURE === "true" ||
  process.env.MONGODB_TLS_INSECURE === "1";

if (tlsInsecure) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.warn(
    "⚠ MONGODB_TLS_INSECURE actif — dev uniquement (certificat non vérifié)",
  );
}

const client = new MongoClient(uri, {
  ...(tlsInsecure && {
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true,
  }),
});

try {
  await client.connect();
  const db = client.db(dbName);
  const collections = await db.listCollections().toArray();
  console.log("✅ Connecté à MongoDB");
  console.log(`   Base : ${dbName}`);
  console.log(
    `   Collections : ${
      collections.length
        ? collections.map((c) => c.name).join(", ")
        : "(aucune pour l’instant — normal)"
    }`,
  );
} catch (err) {
  console.error("❌ Échec connexion :", err.message);
  if (
    !tlsInsecure &&
    /certificate|UNABLE_TO_VERIFY/i.test(String(err.message))
  ) {
    console.error(
      "   → Ajoute MONGODB_TLS_INSECURE=true dans .env (dev local, voir INSTRUCTION.md)",
    );
  }
  process.exit(1);
} finally {
  await client.close();
}
