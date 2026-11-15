/* eslint-env node */
import { getDbName, getMongoClient } from "../mongo/mongoClient.js";

const COLLECTION = "contact_messages";

export async function saveContactMessage(data) {
  const client = await getMongoClient();
  const doc = {
    ...data,
    source: "contact_form",
    createdAt: new Date(),
  };

  const result = await client
    .db(getDbName())
    .collection(COLLECTION)
    .insertOne(doc);

  return result.insertedId.toString();
}