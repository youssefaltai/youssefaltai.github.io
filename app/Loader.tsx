"use client";

import { sleep } from "@/lib";
import React, { useEffect } from "react";

function Loader({
  bodySelector,
  scrollToTop,
}: {
  bodySelector?: string;
  scrollToTop?: boolean;
}) {
  useEffect(() => {
    const body = document.querySelector(bodySelector || "body");
    sleep(500).then(() => {
      body?.classList.remove("page-transition");
      if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);
  return <></>;
}

export default Loader;
