export default function TemoignageStars({ count }) {
  const n = Math.min(5, Math.max(0, count));
  return (
    <span className="temoignage-stars" aria-label={`${n} étoiles sur 5`}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </span>
  );
}
