import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import NavbarGridLines from "./NavbarGridLines";
import useMediaQuery from "../hooks/useMediaQuery";
import "./Navbar.css";

// Menupunkter i mobilmenuen – farvet celle til venstre eller højre som i Figma
const MOBILE_LINKS = [
  { label: "Projekter", to: "/projects", box: "orange", boxSide: "right" },
  { label: "Om mig", to: "/about", box: "green", boxSide: "left" },
  { label: "Kompetencer", to: "/#kompetencer", box: "grey", boxSide: "right" },
  { label: "Kontakt", to: "/contact", box: "burgundy", boxSide: "left" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: "/insta-ikon.svg" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lauralyngenielsen",
    icon: "/linkedin-ikon.svg",
  },
  { label: "GitHub", href: "https://github.com/lauralynge", icon: "/github-ikon.svg" },
];

function MobileMenu({ onClose }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // "Kompetencer" er en sektion på forsiden – scroll ned til den
  const goToSkills = (e) => {
    e.preventDefault();
    onClose();
    const scroll = () =>
      document
        .getElementById("kompetencer")
        ?.scrollIntoView({ behavior: "smooth" });

    if (pathname === "/") {
      scroll();
    } else {
      navigate("/");
      setTimeout(scroll, 100); // vent til forsiden er renderet
    }
  };

  return (
    <div
      className="mobile-menu"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="mobile-header">
        <Link className="mobile-header-logo" to="/" onClick={onClose}>
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <div className="mobile-header-empty" />
        <button
          type="button"
          className="mobile-header-btn mobile-header-close"
          onClick={onClose}
          aria-label="Luk menu"
        >
          <img src="/luk-ikon.svg" alt="" width="22" height="22" />
        </button>
      </div>

      <nav className="mobile-menu-links" aria-label="Primær navigation">
        {MOBILE_LINKS.map((link) => (
          <div
            key={link.label}
            className={`mobile-menu-row box-side-${link.boxSide}`}
          >
            <NavLink
              to={link.to}
              className="mobile-menu-link"
              onClick={link.to === "/#kompetencer" ? goToSkills : onClose}
            >
              <span>{link.label}</span>
              <img src="/menu-pil.svg" alt="" width="20" height="20" />
            </NavLink>
            <div className={`mobile-menu-box box-${link.box}`} />
          </div>
        ))}
      </nav>

      <div className="mobile-menu-footer">
        <div className="mobile-menu-socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              <img src={s.icon} alt="" />
            </a>
          ))}
        </div>
        <p className="mobile-menu-copy">© 2026 Laura Lynge Nielsen</p>
      </div>
    </div>
  );
}

export default function Navbar({ className = "" }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [menuOpen, setMenuOpen] = useState(false);

  // Luk menuen ved sideskift, og hvis vi skifter til desktop-bredde
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, isMobile]);

  // Lås scroll bag menuen og luk på Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Mobil (< 768px): logo, tom celle og burger-knap
  if (isMobile) {
    return (
      <header className={`site-header mobile-header ${className}`}>
        <NavLink className="mobile-header-logo" to="/">
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
        <div className="mobile-header-empty" />
        <button
          type="button"
          className="mobile-header-btn mobile-header-burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Åbn menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <img src="/burger-ikon.svg" alt="" width="28" height="16" />
        </button>

        {/* Portal, så menuen ligger over alt – også når Navbar sidder inde i den faste hero */}
        {menuOpen &&
          createPortal(
            <MobileMenu onClose={() => setMenuOpen(false)} />,
            document.body,
          )}
      </header>
    );
  }

  return (
    <header className={`site-header ${className}`}>
      <NavbarGridLines cols={8} rows={1} />
      {isHome && (
        <div
          className="cell-box box-blue"
          style={{ gridColumn: 8, gridRow: 1, animationDelay: "0s" }}
        />
      )}
      <NavLink className="nav-logo" to="/" style={{ gridColumn: 2 }}>
        <img src="/logo.svg" alt="Logo" />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/projects" className="nav-link" style={{ gridColumn: 5 }}>
          <h3>Projekter</h3>
        </NavLink>
        <NavLink to="/about" className="nav-link" style={{ gridColumn: 6 }}>
          <h3>Om mig</h3>
        </NavLink>
        <NavLink to="/contact" className="nav-link" style={{ gridColumn: 7 }}>
          <h3>Kontakt</h3>
        </NavLink>
      </nav>
    </header>
  );
}
