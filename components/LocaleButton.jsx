import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  changeLocale,
  getCurrentLocale,
  normalizeLocaleCode,
  SUPPORTED_LOCALES,
} from "../src/i18n.js";

export default function LocaleButton({
  className = "locale-dropdown",
  selectClassName = "locale-dropdown-select",
}) {
  const { t } = useTranslation();
  const [pending, setPending] = useState(null);

  const current = pending ?? getCurrentLocale();

  async function handleChange(event) {
    const next = normalizeLocaleCode(event.target.value);
    setPending(next);
    try {
      await changeLocale(next);
    } finally {
      setPending(null);
    }
  }

  return (
    <div className={className}>
      <select
        className={selectClassName}
        value={current}
        aria-label={t("locale.selectAria")}
        onChange={(e) => void handleChange(e)}
      >
        {SUPPORTED_LOCALES.map((code) => (
          <option key={code} value={code}>
            {t(`locale.options.${code}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
