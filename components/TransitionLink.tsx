"use client";

import Link from "next/link";
import React, { HTMLProps } from "react";
import { useRouter } from "next/navigation";

type TransitionLinkProps = HTMLProps<HTMLAnchorElement> & {
  href: string;
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function TransitionLink({
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className="text-xl md:text-2xl font-normal opacity-50 transition-all duration-500 ease-out hover:opacity-100"
    >
      {children}
    </Link>
  );
}
