import React from "react";
import Bio from "../Bio";
import CallToAction from "@/components/CallToAction";
import Loader from "../Loader";
import ProfilePicture from "@/components/ProfilePicture";
import { Metadata } from "next";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "About Me",
  description: "Get to know me better.",
};

function About() {
  return (
    <>
      <Loader scrollToTop />
      <Page showLogo={false}>
        <ProfilePicture />
        <Bio />

        <div className="flex flex-col justify-center gap-4 px-6  max-w-lg">
          <p className="text-lg md:text-xl">
            Frontend engineer with 2+ years of experience building fast, scalable, and user-focused apps.
            Passionate about clean UI, intuitive UX, and engineering solutions users actually want.
          </p>
          <p className="text-lg md:text-xl">
            Strong in React, Flutter, and cloud-native dev. Comfortable in fast-paced, product-driven teams — from startup MVPs to large monorepos.
          </p>
        </div>
        <CallToAction href="/contact">Contact Me</CallToAction>
      </Page>
    </>
  );
}

export default About;
