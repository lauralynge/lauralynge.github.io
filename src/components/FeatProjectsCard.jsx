import { Link } from "react-router-dom";
import "./FeatProjectsCard.css";
import FadeIn from "./FadeIn";
import WipeReveal from "./WipeReveal";

export default function FeatProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.slug}`} className="feat-project-card-link">
      <article className="feat-project-card">
        <WipeReveal className="feat-project-image">
          <img src={project.mainImage} alt={project.title} />
        </WipeReveal>

        <FadeIn delay={index * 100}>
          <div className="feat-project-card-content">
            <div className="Content-top">
              <h2>{project.title}</h2>
              <p className="subtitle small">{project.subtitle}</p>
            </div>

            <div className="content-bottom">
              <ul className="tags">
                {(project.categories || project.tags)?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <span className="explore-button">Udforsk</span>
            </div>
          </div>
        </FadeIn>
      </article>
    </Link>
  );
}
