import React from "react";
import BackToHomeLink from "../BackToHomeLink";
import Bio from "../Bio";
import CallToAction from "@/components/CallToAction";
import Loader from "../Loader";
import ProfilePicture from "@/components/ProfilePicture";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Get to know me better.",
};

function About() {
  return (
    <>
      <Loader scrollToTop />
      <main className="flex flex-col justify-center items-center gap-16 py-16">
        <ProfilePicture />
        <Bio />

        <div className="flex flex-col justify-center gap-4 px-6  max-w-lg">
          <p className="text-lg md:text-xl">
            Full-stack engineer with nearly 2 years of experience in designing
            and developing scalable web apps using the MERN stack and Next.js,
            and cross-platform mobile apps using Flutter.
          </p>
          <p className="text-lg md:text-xl">
            Recognized for writing clean and maintainable code.
          </p>
          <p className="text-lg md:text-xl">
            Problem-solver at heart, with a knack for thorough research.
          </p>
        </div>

        <CallToAction href="/contact">Contact Me</CallToAction>

        <BackToHomeLink />
      </main>
    </>
  );
}

export default About;
