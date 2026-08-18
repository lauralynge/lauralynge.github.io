import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroGridLines from "./HeroGridLines";
import "./Hero.css";
import Navbar from "./Navbar";
import { initHeroAnimations } from "../utils/HeroAnimations";

export default function Hero() {
  const location = useLocation();

  useEffect(() => {
    // Kun kør animationen når vi er på forsiden
    if (location.pathname === "/") {
      const digital = document.querySelector(".digital");
      const designer = document.querySelector(".designer");
      const developer = document.querySelector(".developer");

      if (!digital || !designer || !developer) return;

      // Nulstil klasser
      digital.classList.remove("slide-in", "slide-right-out");
      designer.classList.remove("slide-in", "slide-left-out");
      developer.classList.remove("slide-in", "slide-right-out");

      // Genstart animationen og gem cleanup-funktionen
      const cleanup = initHeroAnimations();

      // Fjern scroll-listener igen ved unmount / route-skift
      return cleanup;
    }
  }, [location.pathname]);

  return (
    <section className="hero">
      <Navbar />

      <div className="hero-grid">
        <HeroGridLines cols={8} rows={4} />

        <div
          className="cell-box box-orange"
          style={{ gridColumn: 2, gridRow: 1, animationDelay: "0.3s" }}
        />
        <div
          className="cell-box box-green"
          style={{ gridColumn: 7, gridRow: 2, animationDelay: "0.6s" }}
        />
        <div
          className="cell-box box-grey"
          style={{ gridColumn: 1, gridRow: 3, animationDelay: "0.9s" }}
        />
        <div
          className="cell-box box-burgundy"
          style={{ gridColumn: 4, gridRow: 4, animationDelay: "1.2s" }}
        />
        <div
          className="cell-box box-pink"
          style={{ gridColumn: 8, gridRow: 4, animationDelay: "1.5s" }}
        />

        <h1
          className="hero-title slide-right digital"
          style={{ gridColumn: "3 / 6", gridRow: 1 }}
        >
          Digital
        </h1>

        <h1
          className="hero-title slide-left designer has-slash"
          style={{ gridColumn: "4 / 7", gridRow: 2 }}
        >
          Designer
        </h1>
        <h1
          className="hero-title slide-right developer"
          style={{ gridColumn: "2 / 5", gridRow: 3 }}
        >
          Developer
        </h1>

        <p className="hero-intro" style={{ gridColumn: "6 / 8", gridRow: 3 }}>
          Jeg er digital designer og udvikler, og jeg skaber intuitive og enkle
          digitale oplevelser — design, der føles, ikke bare ses.
          <br />
          <br />– Laura Lynge Nielsen
        </p>
      </div>
    </section>
  );
}
