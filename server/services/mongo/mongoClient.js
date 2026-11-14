/* eslint-env node */
import { MongoClient } from "mongodb";

let cachedClient;

export function mongoTlsOptions() {
  const tlsInsecure =
    process.env.MONGODB_TLS_INSECURE === "true" ||
    process.env.MONGODB_TLS_INSECURE === "1";

  if (tlsInsecure) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  return tlsInsecure
    ? {
        tlsAllowInvalidCertificates: true,
        tlsAllowInvalidHostnames: true,
      }
    : {};
}

export async function getMongoClient() {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) {
    throw new Error("missing_mongodb_uri");
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, mongoTlsOptions());
  await client.connect();
  cachedClient = client;
  return client;
}

export function getDbName() {
  return process.env.MONGODB_DB_NAME?.trim() || "alicia_coach";
}
