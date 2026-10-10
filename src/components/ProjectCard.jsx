import { Link } from "react-router-dom";
import "./ProjectCard.css";
import WipeReveal from "./WipeReveal";
import FadeIn from "./FadeIn";

export default function ProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <WipeReveal className="project-card-image" once>
        <img src={project.gridImage} alt={project.title} />
      </WipeReveal>

      <FadeIn delay={index * 100} once>
        <div className="project-card-content">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-subtitle small">{project.subtitle}</p>
          <div className="project-card-bottom">
            <p className="project-tags">
              {(project.categories || project.tags)?.join(", ")}
            </p>
            {/* Pilen vises kun på mobil */}
            <img
              className="project-card-arrow"
              src={`${import.meta.env.BASE_URL}arrow-short.svg`}
              alt=""
              width="50.5"
              height="7.36"
            />
          </div>
        </div>
      </FadeIn>
    </Link>
  );
}
