import { useState } from "react";

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
      onUnlock();
    } else {
      setWrong(true);
    }
  }

  return (
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
