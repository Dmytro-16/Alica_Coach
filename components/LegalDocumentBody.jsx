import { Fragment } from "react";

const URL_RE = /(https:\/\/[^\s]+)/g;

function linkify(text) {
  const parts = text.split(URL_RE);
  return parts.map((part, i) =>
    part.startsWith("http") ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function isHeadingLine(line) {
  return (
    /^Article \d+ —/.test(line) ||
    /^\d+\.\s/.test(line) ||
    /^Demande de séance/.test(line) ||
    /^Formulaire type/.test(line)
  );
}

export default function LegalDocumentBody({ text }) {
  const lines = text.split("\n");
  const nodes = [];
  let listBuffer = [];
  let key = 0;

  function flushList() {
    if (listBuffer.length === 0) return;
    nodes.push(
      <ul key={`ul-${key++}`} className="legal-doc-list">
        {listBuffer.map((item) => (
          <li key={item}>{linkify(item)}</li>
        ))}
      </ul>,
    );
    listBuffer = [];
  }

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("• ")) {
      listBuffer.push(trimmed.slice(2));
      continue;
    }

    flushList();

    if (trimmed.startsWith("🟠") || trimmed.startsWith("🔴")) {
      const cls = trimmed.startsWith("🟠")
        ? "legal-doc-marker legal-doc-marker--todo"
        : "legal-doc-marker legal-doc-marker--validate";
      nodes.push(
        <p key={key++} className={cls}>
          {linkify(trimmed)}
        </p>,
      );
      continue;
    }

    if (isHeadingLine(trimmed)) {
      nodes.push(
        <h2 key={key++} className="legal-doc-h2">
          {linkify(trimmed)}
        </h2>,
      );
      continue;
    }

    if (/^Site :|^Dernière mise à jour|^Mouvement Fluide —/.test(trimmed)) {
      nodes.push(
        <p key={key++} className="legal-doc-meta">
          {linkify(trimmed)}
        </p>,
      );
      continue;
    }

    nodes.push(
      <p key={key++} className="legal-doc-p">
        {linkify(trimmed)}
      </p>,
    );
  }

  flushList();

  return <div className="legal-doc-body">{nodes}</div>;
}
