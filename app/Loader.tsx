"use client";

import { handleReverseTransition } from "@/lib";
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
    handleReverseTransition({
      bodySelector,
      delay,
      onComplete: () => {
        if (scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });
      },
    });
  }, []);

  return <></>;
}

export default Loader;
