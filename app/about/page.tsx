import { TransitionLink } from "@/components/TransitionLink";
import Image from "next/image";
import React from "react";
import BackToHomeLink from "../BackToHomeLink";
import Bio from "../Bio";

function About() {
  return (
    <main className="flex flex-col justify-center items-center gap-12 py-12">
      <BackToHomeLink />

      <Image
        priority
        src="/Youssef al-Tai.png"
        alt="Youssef al-Tai"
        width={200}
        height={200}
        className="rounded-full"
      />

      <Bio />

      <div className="flex flex-col items-center gap-4 px-6  max-w-lg">
        <p className="text-lg md:text-xl">
          Full-stack engineer with nearly 2 years of experience in designing and
          developing scalable web apps using the MERN stack and Next.js, and
          cross-platform mobile apps using Flutter.
        </p>
        <p className="text-lg md:text-xl">
          Recognized for writing clean and maintainable code.
        </p>
        <p className="text-lg md:text-xl">
          Problem-solver at heart, with a knack for thorough research.
        </p>
      </div>

      <button className="px-8 py-4 md:px-12 md:py-6 rounded-full bg-blue-600 text-white text-xl md:text-2xl font-semibold transition-all duration-500 ease-out hover:bg-white hover:text-blue-600 hover:shadow-lg">
        Contact Me
      </button>

      <BackToHomeLink />
    </main>
  );
}

export default About;
