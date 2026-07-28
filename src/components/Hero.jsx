import { useEffect } from "react";
import HeroGridLines from "./HeroGridLines";
import "./Hero.css";
import Navbar from "./Navbar";
import { initHeroAnimations } from "../utils/HeroAnimations";



export default function Hero() {

  useEffect(() => {
  initHeroAnimations();
}, []);

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

        <h1 className="hero-title slide-right digital " style={{ gridColumn: "3 / 6", gridRow: 1 }}>
          Digital
        </h1>

        <h1 className="hero-title slide-left designer has-slash" style={{ gridColumn: "4 / 7", gridRow: 2 }}>
          Designer
        </h1>
        <h1 className="hero-title slide-right developer" style={{ gridColumn: "2 / 5", gridRow: 3 }}>
          Developer
        </h1>

        <p className="hero-intro" style={{ gridColumn: "6 / 8", gridRow: 3 }}>
          Jeg er en digital og grafisk designer med en passion for at skabe
          design, der ikke bare ser flot ud, men også giver mening og værdi.
          <br />
          <br />
          – Laura Lynge Nielsen
        </p>
      </div>
    </section>
  );
}
