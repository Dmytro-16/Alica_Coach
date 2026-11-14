import { getStripe } from "./stripeClient.js";
import { getSiteUrl, resolvePriceId } from "./checkoutOffers.js";

function buildPaymentReturnUrl(base, checkoutStatus, fromRdv) {
  const params = new URLSearchParams({ checkout: checkoutStatus });
  if (fromRdv) {
    params.set("from", "rdv");
  }
  return `${base}/paiement?${params.toString()}`;
}

function wantsFromRdv(body) {
  if (body?.fromRdv === true || body?.fromRdv === "true") return true;
  return String(body?.from ?? "").trim() === "rdv";
}

export async function createCheckoutSession(req, body) {
  const offer = String(body?.offer ?? "").trim();
  const resolved = resolvePriceId(offer);
  if (!resolved.ok) {
    return { status: 400, json: { ok: false, error: resolved.error } };
  }

  const base = getSiteUrl(req);

  const fromRdv = wantsFromRdv(body);
  console.log("checkout success_url base:", base, "fromRdv:", fromRdv);
  const stripe = getStripe();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: resolved.priceId, quantity: 1 }],
      success_url: buildPaymentReturnUrl(base, "success", fromRdv),
      cancel_url: buildPaymentReturnUrl(base, "cancel", fromRdv),
    });

    if (!session.url) {
      return { status: 500, json: { ok: false, error: "no_checkout_url" } };
    }

    return { status: 200, json: { ok: true, url: session.url } };
  } catch (err) {
    console.error("stripe_checkout_error", err.message);
    return { status: 500, json: { ok: false, error: "stripe_error" } };
  }
}
