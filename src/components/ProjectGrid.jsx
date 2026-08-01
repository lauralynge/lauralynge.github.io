import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";

export default function ProjectGrid({ projects }) {
  const columns = 3;
  const rows = Math.ceil(projects.length / columns);

  return (
    <section className="project-grid">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const start = rowIndex * columns;
        const rowItems = projects.slice(start, start + columns);

        return (
          <div className="project-grid-row" key={rowIndex}>
            {rowItems.map((project, index) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
