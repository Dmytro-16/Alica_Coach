import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`nav-container${menuOpen ? " nav-container--open" : ""}`}
      aria-label={t("nav.aria")}
    >
      <SiGnature />
      <ul className="nav-list" id="nav-main-menu">
        {links.map(({ to, labelKey }) => (
          <li key={to}>
            <Link to={to} onClick={() => setMenuOpen(false)}>
              {t(labelKey)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <div className="nav-lang">
          <LocaleButton />
        </div>
        <div className="nav-rdv">
          <span className="nav-rdv-desktop">
            <Button onNavigate={() => setMenuOpen(false)} />
          </span>
          <span className="nav-rdv-mobile">
            <Button
              compact
              labelKey="rdv.ctaShort"
              onNavigate={() => setMenuOpen(false)}
            />
          </span>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-label">
            {menuOpen ? t("nav.menuClose") : t("nav.menuOpen")}
          </span>
        </button>
      </div>
    </nav>
  );
}
