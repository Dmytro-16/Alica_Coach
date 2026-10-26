const OFFERS = {
  seance: "STRIPE_PRICE_SEANCE",
  pack: "STRIPE_PRICE_PACK",
};

export function resolvePriceId(offer) {
  const envKey = OFFERS[offer];
  if (!envKey) {
    return { ok: false, error: "invalid_offer" };
  }
  const priceId = process.env[envKey]?.trim();
  if (!priceId || !priceId.startsWith("price_")) {
    return { ok: false, error: "price_not_configured" };
  }
  return { ok: true, priceId };
}

export function getSiteUrl(req) {
  const fromEnv = process.env.SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const host = req?.headers?.["x-forwarded-host"] || req?.headers?.host;
  if (host && String(host).includes("3001")) {
    return "http://localhost:5173";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  const proto = req?.headers?.["x-forwarded-proto"] || "http";
  if (host) return `${proto}://${host}`;

  return "http://localhost:5173";
}
