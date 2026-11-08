export function extractLegalSection(fullText, pageNumber) {
  const startNeedle = `Page ${pageNumber} —`;
  const start = fullText.indexOf(startNeedle);
  if (start === -1) return "";

  const nextNeedle = `Page ${pageNumber + 1} —`;
  const next = fullText.indexOf(nextNeedle, start + startNeedle.length);
  const chunk =
    next === -1 ? fullText.slice(start) : fullText.slice(start, next);

  return chunk
    .replace(/^Page \d+ —[^\n]*\n/, "")
    .replace(/^[^\n]+\n(?=Site :|Conditions|Politique|Médiation)/, "")
    .trim();
}
