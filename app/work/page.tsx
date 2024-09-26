import React from "react";
import Loader from "../Loader";
import BackToHomeLink from "../BackToHomeLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work",
  description: "My portfolio.",
};

function Work() {
  return (
    <>
      <Loader />
      <main className="flex flex-col justify-center items-center gap-16 py-16">
        <h2 className="text-3xl font-semibold">
          Coming soon!{" "}
          <span role="img" aria-label="construction">
            🚧
          </span>
        </h2>
        <BackToHomeLink />
      </main>
    </>
  );
}

export default Work;
