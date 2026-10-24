// import { validateContactPayload } from "./validateContact.js";
// const good = validateContactPayload({
//   lastname: "Martin",
//   firstname: "Test",
//   email: "test@example.com",
//   subject: "3",
//   message: "Un message assez long.",
// });

// const bad = validateContactPayload({ email: "pas-un-email" });
// console.log("good:", good);
// console.log("bad:", bad);

import "dotenv/config";
import { getDbName, getMongoClient } from "./mongoClient.js";

const client = await getMongoClient();
const names = await client.db(getDbName()).listCollections().toArray();
console.log("✅ mongoClient OK");
console.log(
  "   collections:",
  names.map((c) => c.name).join(", ") || "(aucune)",
);
