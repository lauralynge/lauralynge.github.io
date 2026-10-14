import SkillsHero from "../components/SkillsHero";
import SkillsSectionHead from "../components/SkillsSectionHead";
import SkillRow from "../components/SkillRow";
import { skillAreas } from "../data/skills";
import "./SkillsPage.css";

// "Kompetencer – minimal – desktop" i Figma
function SkillsPage() {
  return (
    <div className="skills-page">
      <SkillsHero />

      <section className="skills-page-section">
        <SkillsSectionHead
          title="Det kan jeg bidrage med"
          text="Fem områder, jeg arbejder med — fra idé og udtryk til færdig kode."
        />
        <ol className="skills-page-list">
          {skillAreas.map((area, i) => (
            <SkillRow
              key={area.title}
              number={String(i + 1).padStart(2, "0")}
              title={area.title}
              tags={area.tags}
            />
          ))}
        </ol>
      </section>
    </div>
  );
}

export default SkillsPage;
