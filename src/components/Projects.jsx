// src/components/Projects.jsx
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-background px-8 py-24 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-10">
        <h2 className="font-heading text-3xl font-semibold text-text-primary">
          Projects
        </h2>

        {/* 2-column grid on desktop - matches your current 2 projects exactly */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors duration-200 hover:border-accent"
            >
              {/* Screenshot - consistent 16:9 crop */}
              <div className="aspect-video w-full overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-contain object-center transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-btn border border-border bg-background px-3 py-1 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link row - GitHub is always real; live link shows a muted pill instead of a broken link */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:text-accent"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>

                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent-hover"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="rounded-btn bg-background px-3 py-1 text-xs text-text-muted">
                      Live Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;