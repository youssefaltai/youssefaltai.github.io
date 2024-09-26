"use client";

import Link from "next/link";
import { HTMLProps } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, sleep } from "@/lib";

type NaVLinkProps = HTMLProps<HTMLAnchorElement> & {
  href: string;
  bodySelector?: string;
};

export function NavLink({
  children,
  href,
  bodySelector: bodyClass,
  ...props
}: NaVLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const cleanHref = href.slice(1);
  const cleanPathname = pathname.slice(1);
  const isActive = cleanPathname.startsWith(cleanHref) && cleanHref !== "";

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector(bodyClass || "body");

    body?.classList.add("page-transition", "blur-transition");

    await sleep(200);
    router.push(href);
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={isActive ? (e) => e.preventDefault() : handleTransition}
      className={cn(
        "text-xl md:text-2xl font-normal opacity-50 transition-all duration-500 ease-out hover:opacity-100",
        { "text-blue-600": isActive },
        { "opacity-100": isActive },
        { "font-semibold": isActive }
      )}
    >
      {children}
    </Link>
  );
}
