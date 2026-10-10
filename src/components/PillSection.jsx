import { useState } from "react";
import PillPhysics from "./PillPhysics";
import useMediaQuery from "../hooks/useMediaQuery";
import RevealText from "./RevealText";
import "./PillSection.css";

// Ligger uden for komponenten, så listen er den samme ved hver render –
// ellers genstarter fysikken (og pillerne falder igen) ved hver re-render
const SKILLS = [
  "Prototyping",
  "Branding",
  "Frontend",
  "UX / UI",
  "Microinteractions",
  "Brugertest",
  "AI-prompting",
  "Motion design",
  "Wireframing",
  "Responsivt design",
  "Accessibility",
  "Grafisk design",
];

export default function PillSection() {
  // Mobil: ingen mus – pillerne rystes i stedet med en knap
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [shakeCount, setShakeCount] = useState(0);

  return (
    <section className="pill-section" id="kompetencer">
      <div className="page">
        <div className="pill-section-header">
          <RevealText as="h3" className="pill-section-title">
            Hard skills
          </RevealText>

          {isMobile && (
            <button
              type="button"
              className="pill-shake-button"
              onClick={() => setShakeCount((n) => n + 1)}
            >
              <img src="/ryst-ikon.svg" alt="" width="16" height="16" />
              Ryst dem
            </button>
          )}
        </div>
        <div className="pill-section-line" />
        <PillPhysics
          items={SKILLS}
          fleeFromMouse={!isMobile}
          shakeCount={shakeCount}
        />
      </div>
    </section>
  );
}
