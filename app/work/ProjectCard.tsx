import React from "react";
import { Project } from "./projects";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-6 w-full">
      <ProjectImage project={project} />
      <div className="flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
          <h3 className="text-xl md:text-2xl font-medium">{project.role}</h3>
        </div>
        <p className="text-lg">{project.description}</p>
      </div>
    </div>
  );
}
