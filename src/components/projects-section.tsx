import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">{projects.title}</h2>
        <div className="grid-3">
          {projects.items.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-buttons">
                {project.liveUrl && project.liveUrl.trim() && (
                  <a href={project.liveUrl} className="btn btn-primary">Live Demo</a>
                )}
                <a href={project.githubUrl} className="btn btn-outline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
