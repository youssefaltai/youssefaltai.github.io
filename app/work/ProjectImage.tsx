"use client";

import Image from "next/image";
import { Project } from "./projects";

export default function ProjectImage({ project }: { project: Project }) {
  return (
    <Image
      src={project.image}
      alt={project.title}
      width={200}
      height={200}
      className="rounded-2xl shadow-md object-cover object-center w-40 h-40 md:w-60 md:h-60 trans blur-transition"
      onLoad={(image) =>
        image.currentTarget.classList.remove("blur-transition")
      }
    />
  );
}
