import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Paiement() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.payment.title")}</h1>
      <p>{t("pages.payment.p1")}</p>
      <p>{t("pages.payment.p2")}</p>
      <p>
        {t("pages.payment.p3Prefix")} <Link to="/contact">{t("nav.contact")}</Link>.
      </p>
    </article>
  );
}
