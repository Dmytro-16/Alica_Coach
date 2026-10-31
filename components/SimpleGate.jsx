import { useState } from "react";
import "../src/styles/site-gate.css";

function getSitePassword() {
  const fromSite = import.meta.env.SITE_PASSWORD?.trim();
  if (fromSite) return fromSite;
  const legacy = import.meta.env.VITE_SITE_GATE?.trim();
  if (legacy) return legacy;
  return "demo";
}

export default function SimpleGate({ onUnlock }) {
  const [pwd, setPwd] = useState("");
  const [wrong, setWrong] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (pwd.trim() === getSitePassword()) {
      onUnlock();
    } else {
      setWrong(true);
    }
  }

  return (
    <div className="site-gate">
      <form className="site-gate-card" onSubmit={handleSubmit}>
        <h1 className="site-gate-title">Accès</h1>
        <input
          type="password"
          className="site-gate-input"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
            setWrong(false);
          }}
          placeholder="Mot de passe"
          autoComplete="current-password"
        />
        <button type="submit" className="btn-rdv site-gate-submit">
          Entrer
        </button>
        {wrong && (
          <p className="site-gate-error" role="alert">
            Mot de passe incorrect
          </p>
        )}
      </form>
    </div>
  );
}
