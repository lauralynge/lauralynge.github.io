import { Link } from "react-router-dom";
import projects from "../data/projects";
import FeatProjectsCard from "./FeatProjectsCard";
import ProjectCard from "./ProjectCard";
import useMediaQuery from "../hooks/useMediaQuery";
import useInView from "../hooks/useInView";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";
import "./FeatProjectsSection.css";

export default function FeatProjectSection() {
  const featured = projects.slice(0, 3);
  const [buttonRef, isVisible] = useInView();
  // Mobil: samme kort som på ProjectsPage
  const isMobile = useMediaQuery("(max-width: 767px)");
  const Card = isMobile ? ProjectCard : FeatProjectsCard;

  return (
    <section className="feat-project-section">
      <div className="section-title">
        <RevealText as="h1">Projekter</RevealText>
      </div>

      <div className="feat-project-grid">
        {featured.map((project, index) => (
          <Card key={project.slug} project={project} index={index} />
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
              src={`${import.meta.env.BASE_URL}${isMobile ? "arrow-short.svg" : "arrow-long.svg"}`}
              alt=""
              className="feat-button-arrow"
            />
          </FadeIn>
        </Link>
      </div>
    </section>
  );
}
