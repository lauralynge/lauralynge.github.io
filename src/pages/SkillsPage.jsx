import SkillsHero from "../components/SkillsHero";
import SkillsSectionHead from "../components/SkillsSectionHead";
import SkillRow from "../components/SkillRow";
import ToolSentence from "../components/ToolSentence";
import SoftSkillCard from "../components/SoftSkillCard";
import ExperienceRow from "../components/ExperienceRow";
import MaskReveal from "../components/MaskReveal";
import {
  skillAreas,
  toolSentence,
  softSkills,
  experiences,
} from "../data/skills";
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
              delay={i * 80}
            />
          ))}
        </ol>
      </section>

      <section className="skills-page-section skills-page-tools">
        <SkillsSectionHead
          title="Min værktøjskasse"
          text="Programmer er bare værktøjer — det er nysgerrigheden, der driver mig."
        />
        <MaskReveal>
          <ToolSentence parts={toolSentence} />
        </MaskReveal>
      </section>

      <section className="skills-page-section skills-page-cards-section">
        <SkillsSectionHead
          title="Sådan arbejder jeg"
          text="Godt design starter med leg — og bliver bedst, når man er flere om det."
        />
        <ul className="skills-page-cards">
          {softSkills.map((skill, i) => (
            <SoftSkillCard
              key={skill.title}
              number={String(i + 1).padStart(2, "0")}
              delay={(i % 3) * 100}
              {...skill}
            />
          ))}
        </ul>
      </section>

      <section className="skills-page-section">
        <SkillsSectionHead
          title="Kompetencer i praksis"
          text="Ikke alle kompetencer kommer fra skolebænken. Mine jobs har lært mig ting, jeg bruger hver dag, når jeg designer."
        />
        <ul className="skills-page-list">
          {experiences.map((job, i) => (
            <ExperienceRow key={job.title} {...job} delay={i * 80} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SkillsPage;
