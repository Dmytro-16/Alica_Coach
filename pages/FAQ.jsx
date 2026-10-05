import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <article className="legal-page">
      <h1>{t("pages.faq.title")}</h1>

      <h2>{t("pages.faq.q1")}</h2>
      <p>{t("pages.faq.a1")}</p>

      <h2>{t("pages.faq.q2")}</h2>
      <p>{t("pages.faq.a2")}</p>

      <h2>{t("pages.faq.q3")}</h2>
      <p>
        {t("pages.faq.a3Prefix")}{" "}
        <Link to="/paiement">{t("common.seePaymentPage")}</Link>.
      </p>

      <h2>{t("pages.faq.q4")}</h2>
      <p>
        {t("pages.faq.a4Prefix")}{" "}
        <Link to="/politique-de-confidentialite">
          {t("common.seePrivacyPage")}
        </Link>
        .
      </p>

      <h2>{t("pages.faq.q5")}</h2>
      <p>{t("pages.faq.a5")}</p>
    </article>
  );
}
