/* eslint-env node */

const SUBJECT_LABELS_FR = {
  1: "Particulier",
  2: "Entreprise",
  3: "Question",
  4: "Suggestion",
  5: "Signaler un problème",
  6: "Autre",
};

export function contactSubjectLabel(subjectId) {
  return SUBJECT_LABELS_FR[String(subjectId)] ?? `Sujet ${subjectId}`;
}