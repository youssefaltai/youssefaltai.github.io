import React from "react";
import Loader from "../Loader";
import { Metadata } from "next";
import Page from "@/components/Page";
import { projects } from "./projects";
import Image from "next/image";
import { NavLink } from "@/components/NavLink";
import ProjectCard from "./ProjectCard";

export const metadata: Metadata = {
  title: "My Work",
  description: "My portfolio.",
};

function Work() {
  return (
    <>
      <Loader />
      <Page className="px-16">
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <NavLink
              key={index}
              className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-200 opacity-100"
              href={`/work/${project.slug}`}
            >
              <ProjectCard project={project} />
            </NavLink>
          ))}
        </div>
      </Page>
    </>
  );
}

export default Work;
