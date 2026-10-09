import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroGridLines from "./HeroGridLines";
import "./Hero.css";
import Navbar from "./Navbar";
import { initHeroAnimations } from "../utils/HeroAnimations";
import useMediaQuery from "../hooks/useMediaQuery";

// Placering af bokse og tekst pr. skærmstørrelse.
// Tekstfelter er [kolonneStart, kolonneSlut, række] – samme format som grid-column "start / slut".
// Desktop (≥ 1024px, fx iPad på langs og 13" og større): det oprindelige layout
const LAYOUTS = {
  desktop: {
    cols: 8,
    rows: 4,
    boxes: [
      { color: "orange", col: 2, row: 1 },
      { color: "green", col: 7, row: 2 },
      { color: "grey", col: 1, row: 3 },
      { color: "burgundy", col: 4, row: 4 },
      { color: "pink", col: 8, row: 4 },
    ],
    digital: [3, 6, 1],
    designer: [4, 7, 2],
    developer: [2, 5, 3],
    intro: [6, 8, 3],
  },
  // Tablet (600–1023px, fx iPad på højkant): bredere titler og introtekst på egen række
  tablet: {
    cols: 8,
    rows: 5,
    boxes: [
      { color: "orange", col: 2, row: 1 },
      { color: "green", col: 2, row: 2 },
      { color: "grey", col: 1, row: 3 },
      { color: "burgundy", col: 3, row: 5 },
      { color: "pink", col: 8, row: 5 },
    ],
    digital: [3, 7, 1],
    designer: [4, 8, 2],
    developer: [2, 6, 3],
    intro: [4, 8, 4],
  },
  // Mobil (< 600px, fx iPhone): 6 kolonner, titler over næsten hele bredden
  mobile: {
    cols: 6,
    rows: 5,
    boxes: [
      { color: "orange", col: 5, row: 1 },
      { color: "green", col: 6, row: 2 },
      { color: "grey", col: 1, row: 3 },
      { color: "burgundy", col: 3, row: 5 },
      { color: "pink", col: 6, row: 5 },
    ],
    digital: [2, 5, 1],
    designer: [2, 6, 2],
    developer: [2, 6, 3],
    intro: [2, 6, 4],
  },
};

// [start, slut, række] → inline grid-style
const area = ([colStart, colEnd, row]) => ({
  gridColumn: `${colStart} / ${colEnd}`,
  gridRow: row,
});

export default function Hero() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const layout = isMobile
    ? LAYOUTS.mobile
    : isTablet
      ? LAYOUTS.tablet
      : LAYOUTS.desktop;

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
        <HeroGridLines
          cols={layout.cols}
          rows={layout.rows}
          skipAreas={[
            layout.digital,
            layout.designer,
            layout.developer,
            layout.intro,
          ]}
        />

        {layout.boxes.map((box, i) => (
          <div
            key={box.color}
            className={`cell-box box-${box.color}`}
            style={{
              gridColumn: box.col,
              gridRow: box.row,
              animationDelay: `${0.3 * (i + 1)}s`,
            }}
          />
        ))}

        <h1
          className="hero-title slide-right digital"
          style={area(layout.digital)}
        >
          Digital
        </h1>

        <h1
          className="hero-title slide-left designer has-slash"
          style={area(layout.designer)}
        >
          Designer
        </h1>
        <h1
          className="hero-title slide-right developer"
          style={area(layout.developer)}
        >
          Developer
        </h1>

        <p className="hero-intro" style={area(layout.intro)}>
          Jeg er digital designer og udvikler, og jeg skaber intuitive og enkle
          digitale oplevelser — design, der føles, ikke bare ses.
          <br />
          <br />– Laura Lynge Nielsen
        </p>
      </div>
    </section>
  );
}
