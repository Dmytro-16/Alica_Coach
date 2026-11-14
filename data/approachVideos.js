/** Fichiers dans public/video/ — un par pilier (remplacer quand tu as 4 reels) */
function publicVideoPath(filename) {
  return `/video/${encodeURIComponent(filename)}`;
}

const REEL_METHODE = "Réel Instagram vidéo citation calme bleu et blanc .mp4";

export const HOME_APPROACH_VIDEOS = [
  {
    labelKey: "footer.pillarBody",
    hintKey: "footer.pillarBodyHint",
    videoSrc: publicVideoPath(REEL_METHODE),
  },
  {
    labelKey: "footer.pillarMind",
    hintKey: "footer.pillarMindHint",
    videoSrc: publicVideoPath(REEL_METHODE),
  },
  {
    labelKey: "footer.pillarBalance",
    hintKey: "footer.pillarBalanceHint",
    videoSrc: publicVideoPath(REEL_METHODE),
  },
  {
    labelKey: "footer.pillarConfidence",
    hintKey: "footer.pillarConfidenceHint",
    videoSrc: publicVideoPath(REEL_METHODE),
  },
];