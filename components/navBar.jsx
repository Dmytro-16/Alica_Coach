import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SiGnature from "../components/siGnature";
import Button from "../components/buttonRdv";
import LocaleButton from "../components/LocaleButton";

const links = [
  { to: "/", labelKey: "nav.home" },
  { to: "/a-propos", labelKey: "nav.about" },
  { to: "/accomplishments", labelKey: "nav.journey" },
  { to: "/tarifs", labelKey: "nav.pricing" },
  { to: "/temoignages", labelKey: "nav.testimonials" },
  { to: "/contact", labelKey: "nav.contact" },
];

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="nav-container" aria-label={t("nav.aria")}>
      <SiGnature />
      <ul className="nav-list">
        {links.map(({ to, labelKey }) => (
          <li key={to}>
            <Link to={to}>{t(labelKey)}</Link>
          </li>
        ))}
        <li className="nav-lang">
          <LocaleButton />
        </li>
        <li className="nav-rdv">
          <Button />
        </li>
      </ul>
    </nav>
  );
}
