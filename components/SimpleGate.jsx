import { useState } from "react";
<<<<<<< HEAD

function SimpleGate({ onUnlock }) {
  const [pwd, setPwd] = useState("");
  const [wrong, setWrong] = useState(false);

  const SECRET =
    import.meta.env.VITE_SITE_GATE ||
    import.meta.env.VITE_SITE_PASSWORD ||
    "demo";

  function handleSubmit(e) {
    e.preventDefault();
    if (pwd === SECRET) {
=======
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
>>>>>>> dev
      onUnlock();
    } else {
      setWrong(true);
    }
  }

  return (
<<<<<<< HEAD
    <div style={{ padding: "2rem", maxWidth: 320, margin: "4rem auto" }}>
      <h1>Accès</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Mot de passe"
          autoComplete="current-password"
        />
        <button type="submit">Entrer</button>
      </form>
      {wrong && <p>Mot de passe incorrect</p>}
    </div>
  );
}

export default SimpleGate;
=======
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
>>>>>>> dev
