/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import {
  CONSENT_UPDATED_EVENT,
  acceptAllConsent,
  getValidConsent,
  rejectAllConsent,
  writeConsent,
} from "../src/cookies/cookieConsent";

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => getValidConsent());
  const [prefsOpen, setPrefsOpen] = useState(false);

  useEffect(() => {
    const sync = () => setConsent(getValidConsent());
    window.addEventListener(CONSENT_UPDATED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
  }, []);

  function acceptAll() {
    acceptAllConsent();
    setConsent(getValidConsent());
    setPrefsOpen(false);
  }

  function rejectAll() {
    rejectAllConsent();
    setConsent(getValidConsent());
    setPrefsOpen(false);
  }

  function saveBooking(booking) {
    writeConsent({ booking });
    setConsent(getValidConsent());
    setPrefsOpen(false);
  }

  function openCookiePreferences() {
    setPrefsOpen(true);
  }
  const value = {
    consent,
    needsBanner: consent === null,
    bookingAllowed: consent?.booking === true,
    prefsOpen,
    setPrefsOpen,
    acceptAll,
    rejectAll,
    saveBooking,
    openCookiePreferences,
  };
  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const value = useContext(CookieConsentContext);
  if (!value) {
    throw new Error("Enveloppe l’app avec <CookieConsentProvider>");
  }
  return value;
}
