/* eslint-disable react-refresh/only-export-components */

import { useCookieConsent } from "./CookieConsentProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../src/styles/cookie-banner.css";

function CookiePrefsPanel({ initialBooking, onSave, onClose }) {
  const [bookingChecked, setBookingChecked] = useState(initialBooking);

  return (
    <>
      <p className="cookie-banner__text">
        <strong>Gérer mes cookies</strong>
      </p>
      <label className="cookie-banner__label">
        <input
          type="checkbox"
          checked={bookingChecked}
          onChange={(e) => setBookingChecked(e.target.checked)}
        />
        Calendrier de réservation sur le site (Calendly)
      </label>
      <div className="cookie-banner__actions">
        <button
          type="button"
          className="btn-rdv"
          onClick={() => onSave(bookingChecked)}
        >
          Enregistrer
        </button>
        <button
          type="button"
          className="cookie-banner__btn-reject"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </>
  );
}

export default function CookieBanner() {
  const {
    needsBanner,
    prefsOpen,
    setPrefsOpen,
    consent,
    acceptAll,
    rejectAll,
    saveBooking,
  } = useCookieConsent();

  if (!needsBanner && !prefsOpen) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookies">
      <div className="cookie-banner__inner">
        <span className="cookie-banner__icon" aria-hidden="true">
          <i className="fa-solid fa-cookie-bite" />
        </span>
        <div>
          {prefsOpen ? (
            <CookiePrefsPanel
              key={consent?.ts ?? "no-consent"}
              initialBooking={consent?.booking ?? false}
              onSave={saveBooking}
              onClose={() => setPrefsOpen(false)}
            />
          ) : (
            <>
              <p className="cookie-banner__text">
                Nous utilisons des cookies pour la langue et, si vous
                l’acceptez, le calendrier de réservation sur le site.{" "}
                <Link to="/politique-cookies">En savoir plus</Link>
              </p>
              <div className="cookie-banner__actions">
                <button type="button" className="btn-rdv" onClick={acceptAll}>
                  Tout accepter
                </button>
                <button
                  type="button"
                  className="cookie-banner__btn-reject"
                  onClick={rejectAll}
                >
                  Tout refuser
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
