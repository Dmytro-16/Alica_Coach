import { useTranslation } from "react-i18next";
import fullLegal from "../legal/JURIDIQUE-RGPD-CGU-CGV.md?raw";
import { extractLegalSection } from "../legal/extractSection.js";
import LegalDocumentBody from "./LegalDocumentBody.jsx";
import "../src/styles/legal-document.css";

export default function LegalDocumentPage({ pageNumber, titleKey }) {
  const { t } = useTranslation();
  const sectionText = extractLegalSection(fullLegal, pageNumber);

  return (
    <article className="legal-page legal-page--document">
      <h1>{t(titleKey)}</h1>
      <LegalDocumentBody text={sectionText} />
    </article>
  );
}
