import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frResources from "./locales/fr.json";
import enResources from "./locales/en.json";
import ruResources from "./locales/ru.json";

export const LOCALE_STORAGE_KEY = "alicia_coach_lang";

export const SUPPORTED_LOCALES = ["fr", "en", "ru"];

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "fr";
}

export function normalizeLocaleCode(lng) {
  const code = String(lng ?? "fr").split("-")[0].toLowerCase();
  return SUPPORTED_LOCALES.includes(code) ? code : "fr";
}

function persistLocale(lng) {
  const code = normalizeLocaleCode(lng);
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = code;
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      fr: { translation: frResources },
      en: { translation: enResources },
      ru: { translation: ruResources },
    },
    lng: readStoredLocale(),
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: "fr",
    load: "languageOnly",
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
      bindI18n: "languageChanged",
    },
  });

  persistLocale(i18n.language);
  i18n.on("languageChanged", persistLocale);
}

/** Langue choisie par l’utilisateur (pas resolvedLanguage / fallback) */
export function getCurrentLocale() {
  return normalizeLocaleCode(i18n.language);
}

export function changeLocale(code) {
  const next = normalizeLocaleCode(code);
  if (!SUPPORTED_LOCALES.includes(next)) {
    return Promise.resolve(getCurrentLocale());
  }
  return i18n.changeLanguage(next);
}

export default i18n;
