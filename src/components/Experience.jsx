import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div id = "experience" className="border-b border-neutral-900 pb-4 pt-20">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-md text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-lg">
                {exp.role} -{" "}
                <span className="text-sm text-purple-400 text-lg">
                  {exp.company}
                </span>
              </h6>
              <ul className="mb-4 text-neutral-400 text-md list-disc list-inside">
                {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
                  ))}
              </ul>
              <div className="flex flex-wrap">
                 {exp.technologies.map((tech, i) => (
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

export default Experience;
