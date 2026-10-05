import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ButtonRdv({ compact = false }) {
  const { t } = useTranslation();
  const btnClass = compact ? "btn-rdv btn-rdv--compact" : "btn-rdv";

  return (
    <button type="button" className={btnClass}>
      <Link to="/rdv" className="btn-rdv-link">
        {t("rdv.cta")}
      </Link>
    </button>
  );
}
