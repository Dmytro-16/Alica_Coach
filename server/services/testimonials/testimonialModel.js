/* eslint-env node */
import { getDbName, getMongoClient } from "../mongo/mongoClient.js";

export const TESTIMONIALS_COLLECTION = "testimonials";

export async function findPublishedTestimonials() {
  const client = await getMongoClient();
  const rows = await client
    .db(getDbName())
    .collection(TESTIMONIALS_COLLECTION)
    .find(
      { published: true },
      {
        sort: { createdAt: -1 },
        projection: { author: 1, stars: 1, text: 1 },
      },
    )
    .toArray();

  return rows.map((row) => ({
    id: row._id.toString(),
    author: String(row.author ?? ""),
    stars: Number(row.stars) || 5,
    text: String(row.text ?? ""),
  }));
}

export async function insertTestimonial(data) {
  const client = await getMongoClient();
  const now = new Date();
  const doc = {
    author: data.author,
    email: data.email,
    text: data.text,
    stars: data.stars,
    consentPublish: true,
    consentAt: now,
    published: true,
    source: "form",
    createdAt: now,
  };

  const result = await client
    .db(getDbName())
    .collection(TESTIMONIALS_COLLECTION)
    .insertOne(doc);

  return result.insertedId.toString();
}
