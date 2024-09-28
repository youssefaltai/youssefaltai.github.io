import React from "react";
import Loader from "@/app/Loader";
import Page from "@/components/Page";
import Image from "next/image";
import FancyBullet from "@/components/icons/FancyBullet";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import ProjectCard from "../ProjectCard";
import { getProject } from "../projects";
import { redirect } from "next/navigation";

export default function Project({
  params: { project },
}: {
  params: { project: string };
}) {
  const projectDetails = getProject(project);
  if (!projectDetails) return redirect("/work");

  return (
    <>
      <Loader />
      <Page showBack={false} className="px-16">
        <ProjectCard project={projectDetails} />

        <div className="flex flex-col gap-6 w-full">
          <h4 className="text-2xl font-bold">View Project</h4>
          <div className="flex flex-col md:flex-row gap-6">
            {projectDetails.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.image}
                  alt={link.title}
                  width={180}
                  height={53.33}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="flex gap-6 w-full"> */}
        <div className="flex flex-col gap-6 w-full">
          <h4 className="text-2xl font-bold">Impact</h4>
          <div className="flex flex-col gap-4">
            {projectDetails.responsibilities.map((point, index) => (
              <div className="flex gap-2" key={index}>
                <FancyBullet />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <h4 className="text-2xl font-bold">Gallery</h4>
          <div className="flex gap-4 overflow-x-scroll">
            {projectDetails.gallery.map((image, index) => (
              <Image
                priority
                key={index}
                src={image}
                alt={projectDetails.title}
                width={600}
                height={600}
                className="rounded-2xl object-cover object-center"
              />
            ))}
          </div>
        </div>
        {/* </div> */}

        <NavLink activatable={false} href="/work">
          Back to Projects
        </NavLink>
      </Page>
    </>
  );
}
