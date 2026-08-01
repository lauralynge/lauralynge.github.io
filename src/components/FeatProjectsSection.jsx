import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "./FeatProjectsCard";
import useInView from "../hooks/useInView";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";
import "./FeatProjectsSection.css";

export default function FeatProjectSection() {
  const featured = projects.slice(0, 3);
  const [buttonRef, isVisible] = useInView();

  return (
    <section className="feat-project-section">
      <div className="section-title">
        <RevealText as="h1">Projekter</RevealText>
      </div>

      <div className="feat-project-grid">
        {featured.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="all-projects-button" ref={buttonRef}>
        <Link
          className={`feat-button ${isVisible ? "is-visible" : ""}`}
          to="/projects"
        >
          <RevealText as="h2" className="feat-button-text">
            Alle projekter
          </RevealText>
          <span className="feat-button-line" aria-hidden="true" />
          <FadeIn as="span" distance={0}>
            <img
              src={`${import.meta.env.BASE_URL}arrow-long.svg`}
              alt=""
              className="feat-button-arrow"
            />
          </FadeIn>
        </Link>
      </div>
    </section>
  );
}
