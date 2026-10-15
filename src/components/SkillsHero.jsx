import RevealText from "./RevealText";
import MaskReveal from "./MaskReveal";
import "./SkillsHero.css";

// Øverste del af Kompetencer: overskrift og intro med streg under
export default function SkillsHero() {
  return (
    <section className="skills-hero">
      <RevealText as="h1" className="skills-hero-title">
        Kompetencer
      </RevealText>

      <MaskReveal>
        <p className="skills-hero-intro">
          Jeg er ikke kun designer og ikke kun udvikler. Jeg kan både designe en
          løsning og selv bygge den — fra første skitse til noget, der virker.
        </p>
      </MaskReveal>
    </section>
  );
}
