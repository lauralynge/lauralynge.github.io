import { Link } from "react-router";
import projects from "../data/projects";

export default function HomeContent() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <div className="page">
        <section className="section">
          <div className="section-heading">
            <h1>Projekter</h1>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <img src={project.image} alt={`Preview af ${project.title}`} />
                <div className="project-card-content">
                  <p className="eyebrow">{project.year}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <Link to={`/projects/${project.slug}`}>Læs mere</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="actions">
            <Link className="button" to="/projects">
              Se projekter
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
