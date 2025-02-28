import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Project</h2>
      <div className="">
        {PROJECTS.map((project, i) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={i}>
            <div className="w-full lg:w-1/4 lg:mr-6 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-2 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
