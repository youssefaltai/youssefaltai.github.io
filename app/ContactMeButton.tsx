"use client";

import { PropsWithChildren } from "react";

type ContactMeButtonProps = PropsWithChildren<{}>;
export default function ContactMeButton({ children }: ContactMeButtonProps) {
  return (
    <button
      className={`button button-primary`}
      onClick={(e) => {
        e.preventDefault();

        const targetElement = document.querySelector("#contact") as any;
        const offset = 176;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }}
    >
      <div className="flex justify-center items-center gap-4">{children}</div>
    </button>
  );
}
