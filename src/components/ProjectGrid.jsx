import ProjectCard from "./ProjectCard";
import useMediaQuery from "../hooks/useMediaQuery";
import "./ProjectGrid.css";

export default function ProjectGrid({ projects }) {
  // 2 kolonner under 1280px og 1 under 1000px, så kortene ikke bliver for smalle.
  // Rækkerne skal have lige så mange projekter som der er kolonner,
  // ellers står det sidste projekt alene på sin egen linje
  const isNarrow = useMediaQuery("(max-width: 1279px)");
  const isSingle = useMediaQuery("(max-width: 999px)");
  const columns = isSingle ? 1 : isNarrow ? 2 : 3;
  const rows = Math.ceil(projects.length / columns);

  return (
    <section className="project-grid">
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const start = rowIndex * columns;
        const rowItems = projects.slice(start, start + columns);

        return (
          <div className="project-grid-row" key={rowIndex}>
            {rowItems.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
