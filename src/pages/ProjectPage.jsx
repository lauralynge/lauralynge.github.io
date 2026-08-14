import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import ImageRow from "../components/ImageRow";
import FadeIn from "../components/FadeIn";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[currentIndex];

  // Find næste projekt i listen, spring tilbage til start hvis det er det sidste
  const nextProject =
    currentIndex !== -1 ? projects[(currentIndex + 1) % projects.length] : null;

  if (!project) {
    return (
      <div className="page">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  return (
    <article className="page">
      <section className="section intro">
        <div className="col-left">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>
        </div>

        <div className="col-right">
          <Link className="back-link small" to="/projects">
            Tilbage til projekter
          </Link>
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-mockups">
        {/* Indhold - billeder */}
        {project.rows.map((row, i) => (
          <FadeIn delay={i * 300} key={i}>
            <ImageRow images={row} />
          </FadeIn>
        ))}
      </section>

      <section className="project-details">
        <div className="team-list">
          <p className="small">Team</p>
          <ul className="tag-list">
            {project.team.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>

        <div className="actions">
          {project.links.map((link) => (
            <a
              className="button secondary"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {nextProject && (
        <section className="next-project">
          <Link
            to={`/projects/${nextProject.slug}`}
            className="next-project-link"
          >
            <h2>Næste Projekt</h2>
          </Link>
        </section>
      )}
    </article>
  );
}

export default ProjectPage;
