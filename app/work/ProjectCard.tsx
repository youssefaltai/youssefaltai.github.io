import Image from "next/image";
import React from "react";
import { Project } from "./projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-6 w-full">
      <Image
        src={project.image}
        alt={project.title}
        width={200}
        height={200}
        className="rounded-2xl shadow-md object-cover object-center w-40 h-40 md:w-60 md:h-60"
      />
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
