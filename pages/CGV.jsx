import { useTranslation } from "react-i18next";
import fullLegal from "../legal/JURIDIQUE-RGPD-CGU-CGV.md?raw";
import { extractLegalSection } from "../legal/extractSection.js";
import LegalDocumentBody from "../components/LegalDocumentBody.jsx";
import "../src/styles/legal-document.css";

export default function CGV() {
  const { t } = useTranslation();

  return (
    <article className="legal-page legal-page--document">
      <h1>{t("pages.cgv.title")}</h1>
      <p className="legal-doc-meta">{t("pages.cgv.intro")}</p>

      <h2 id="particuliers" className="legal-doc-section-title">
        {t("pages.cgvB2c.title")}
      </h2>
      <LegalDocumentBody text={extractLegalSection(fullLegal, 3)} />

      <h2 id="professionnels" className="legal-doc-section-title">
        {t("pages.cgvB2b.title")}
      </h2>
      <LegalDocumentBody text={extractLegalSection(fullLegal, 4)} />
    </article>
  );
}
