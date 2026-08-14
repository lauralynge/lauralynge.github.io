import PillPhysics from "./PillPhysics";
import RevealText from "./RevealText";
import "./PillSection.css";

export default function PillSection() {
  const skills = [
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

  return (
    <section className="pill-section">
      <div className="page">
        <RevealText as="h3" className="pill-section-title">
          Hard skills
        </RevealText>
        <div className="pill-section-line" />
        <PillPhysics items={skills} />
      </div>
    </section>
  );
}
