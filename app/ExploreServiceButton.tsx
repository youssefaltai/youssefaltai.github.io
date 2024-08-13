"use client";

import { Compass } from "@/components/Icons";

export default function ExploreServiceButton() {
  return (
    <button
      className={`button button-secondary`}
      onClick={(e) => {
        e.preventDefault();

        const targetElement = document.querySelector("#details") as any;
        const offset = 176;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }}
    >
      <div className="flex justify-center items-center gap-4">
        <Compass />
        Explore Service
      </div>
    </button>
  );
}
