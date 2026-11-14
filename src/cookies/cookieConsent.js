export const CONSENT_STORAGE_KEY = "alicia_coach_cookie_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
export const CONSENT_UPDATED_EVENT = "alicia-cookie-consent-updated";

function parseStored(raw) {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    if (data?.v !== CONSENT_VERSION) return null;
    if (typeof data.ts !== "number" || typeof data.booking !== "boolean") {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function getValidConsent() {
  const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
  const consent = parseStored(raw);
  if (!consent) return null;
  if (Date.now() - consent.ts > CONSENT_MAX_AGE_MS) return null;
  return consent;
}

export function hasBookingConsent() {
  return getValidConsent()?.booking === true;
}

export function writeConsent({ booking }) {
  const payload = {
    v: CONSENT_VERSION,
    ts: Date.now(),
    booking: Boolean(booking),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CONSENT_UPDATED_EVENT));
  }
  return payload;
}

export function acceptAllConsent() {
  return writeConsent({ booking: true });
}

export function rejectAllConsent() {
  return writeConsent({ booking: false });
}
