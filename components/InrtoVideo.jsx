import { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../src/styles/intro-video.css";

const INTRO_SRC = "/video/SITE_INTRO.mp4";

export default function IntroVideo({ onDone }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  const finish = useCallback(() => {
    sessionStorage.setItem("alicia_coach_intro_seen", "1");
    onDone();
  }, [onDone]);

  return (
    <div
      className="intro-video"
      role="dialog"
      aria-modal="true"
      aria-label={t("intro.aria")}
    >
      <video
        ref={videoRef}
        className="intro-video__player"
        src={INTRO_SRC}
        autoPlay
        muted
        playsInline
        onEnded={finish}
      />
      {/* <button
        type="button"
        className="intro-video__skip btn-rdv"
        onClick={finish}
      >
        {t("intro.skip")}
      </button> */}
    </div>
  );
}
