"use client";

import Image from "next/image";
import { ProjectLink } from "./projects";

export default function ProjectLinkImage({ link }: { link: ProjectLink }) {
  return (
    <Image
      src={link.image}
      alt={link.title}
      width={180}
      height={53.33}
      className="trans blur-transition"
      onLoad={(image) =>
        image.currentTarget.classList.remove("blur-transition")
      }
    />
  );
}
