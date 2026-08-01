import projects from "../data/projects";
import RevealText from "../components/RevealText";
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <div className="page">
      <section className="section-title">
        <RevealText as="h1">Projekter</RevealText>
      </section>

      <section>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
