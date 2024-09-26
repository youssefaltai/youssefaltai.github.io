"use client";

import { sleep } from "@/lib";
import React, { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const body = document.querySelector("body");
    sleep(500).then(() => {
      body?.classList.remove("page-transition");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);
  return <></>;
}

export default Loader;
