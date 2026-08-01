import { Link } from "react-router-dom";
import "./ProjectCard.css";
import WipeReveal from "./WipeReveal";
import FadeIn from "./FadeIn";

export default function ProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <WipeReveal className="project-card-image">
        <img src={project.image} alt={project.title} />
      </WipeReveal>

      <FadeIn delay={index * 100}>
        <div className="project-card-content">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-subtitle small">{project.subtitle}</p>
          <p className="project-tags">
            {(project.categories || project.tags)?.join(", ")}
          </p>
        </div>
      </FadeIn>
    </Link>
  );
}
