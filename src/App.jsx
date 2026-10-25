import { Route, Routes } from "react-router-dom";
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
import FAQ from "../pages/FAQ";
import Paiement from "../pages/Paiement";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./App.css";
import SimpleGate from "../components/SimpleGate";
import { useState } from "react";

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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
