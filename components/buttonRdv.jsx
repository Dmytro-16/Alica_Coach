import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ButtonRdv({
  compact = false,
  labelKey = "rdv.cta",
  onNavigate,
}) {
  const { t } = useTranslation();
  const className = compact ? "btn-rdv btn-rdv--compact" : "btn-rdv";

  return (
    <Link to="/rdv" className={className} onClick={onNavigate}>
      {t(labelKey)}
    </Link>
  );
}
