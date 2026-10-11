import RevealText from "./RevealText";
import "./AboutSection.css";

// Sektion med streg øverst: overskrift til venstre, tekst/intro til højre.
// "children" vises under overskrift og tekst (fx billeder eller en liste).
export default function AboutSection({ title, aside, children, className = "" }) {
  return (
    <section className={`about-section ${className}`}>
      <div className="about-section-head">
        <RevealText as="h2" className="about-section-title">
          {title}
        </RevealText>
        {aside && <div className="about-section-aside">{aside}</div>}
      </div>
      {children}
    </section>
  );
}
