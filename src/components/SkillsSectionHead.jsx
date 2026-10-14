import MaskReveal from "./MaskReveal";
import "./SkillsSectionHead.css";

// Sektionshoved på Kompetencer: lille etiket til venstre, kort tekst til højre
// og en streg under. Etiketten er stadig en h2, så siden kan navigeres
export default function SkillsSectionHead({ title, text }) {
  return (
    <div className="skills-section-head">
      <MaskReveal>
        <h2 className="skills-section-title">{title}</h2>
      </MaskReveal>
      <MaskReveal>
        <p className="skills-section-text">{text}</p>
      </MaskReveal>
    </div>
  );
}
