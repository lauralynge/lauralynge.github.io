import { NavLink, useLocation } from "react-router";
import GridLines from "./GridLines";
import "./Navbar.css";

export default function Navbar({ className = "" }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={`site-header ${className}`}>
      <GridLines cols={8} rows={1} />
      {isHome && (
        <div
          className="cell-box box-blue"
          style={{ gridColumn: 8, gridRow: 1, animationDelay: "0s" }}
        />
      )}
      <NavLink className="brand" to="/" style={{ gridColumn: 2 }}>
        <h3>Forside/Logo</h3>
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
