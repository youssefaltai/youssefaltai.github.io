"use client";

import { sleep } from "@/lib";
import React, { useEffect } from "react";

function Loader({
  bodySelector,
  scrollToTop,
  delay,
}: {
  delay?: number;
  bodySelector?: string;
  scrollToTop?: boolean;
}) {
  useEffect(() => {
    const body = document.querySelector(bodySelector || "body");
    sleep(delay || 0).then(() => {
      body?.classList.remove("page-transition");
      if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);
  return <></>;
}

export default Loader;
