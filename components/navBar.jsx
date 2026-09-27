import { Link } from "react-router-dom";
import SiGnature from "../components/siGnature";
import Button from "../components/buttonRdv";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/accomplishments", label: "Mon parcours" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="nav-container" aria-label="Navigation principale">
      <SiGnature />
      <ul className="nav-list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
        <Button />
      </ul>
    </nav>
  );
}
