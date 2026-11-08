import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/A propos";
import Accomp from "../pages/Accomp";
import MonParcours from "../pages/Mon parcours";
import Contact from "../pages/Contact";
import Tarifs from "../pages/Tarifs";
import RDV from "../pages/RDV";
import Témoignages from "../pages/Témoignages";
import Page404 from "../pages/404";
import MentionsLegales from "../pages/MentionsLegales";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";
import CGV from "../pages/CGV";
import PolitiqueCookies from "../pages/PolitiqueCookies";
import CGU from "../pages/CGU";
import MediationConsommation from "../pages/MediationConsommation";
import FAQ from "../pages/FAQ";
import Paiement from "../pages/Paiement";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./App.css";
import SimpleGate from "../components/SimpleGate";
import CookieBanner from "../components/CookieBanner";
import { CookieConsentProvider } from "../components/CookieConsentProvider";

function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("site_ok") === "1",
  );

  if (!unlocked) {
    return (
      <SimpleGate
        onUnlock={() => {
          sessionStorage.setItem("site_ok", "1");
          setUnlocked(true);
        }}
      />
    );
  }

  return (
    <CookieConsentProvider>
      <div className="app-layout">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/accomplishments" element={<Accomp />} />
            <Route path="/mon-parcours" element={<MonParcours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/rdv" element={<RDV />} />
            <Route path="/temoignages" element={<Témoignages />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/politique-de-confidentialite"
              element={<PolitiqueConfidentialite />}
            />
            <Route path="/cgv" element={<CGV />} />
            <Route
              path="/cgv-particuliers"
              element={<Navigate to="/cgv#particuliers" replace />}
            />
            <Route
              path="/cgv-professionnels"
              element={<Navigate to="/cgv#professionnels" replace />}
            />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/mediation" element={<MediationConsommation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <CookieBanner />
        <Footer />
      </div>
    </CookieConsentProvider>
  );
}

export default App;
