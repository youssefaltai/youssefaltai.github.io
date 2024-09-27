"use client";

import Link from "next/link";
import { HTMLProps } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, sleep } from "@/lib";

export const linkStyle = (isActive: boolean) =>
  cn(
    "text-xl md:text-2xl font-normal opacity-50 transition-all duration-500 ease-out hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed",
    { "text-blue-600": isActive },
    { "opacity-100": isActive },
    { "font-semibold": isActive }
  );

type NavLinkProps = HTMLProps<HTMLAnchorElement> & {
  href: string;
  bodySelector?: string;
};

export function NavLink({
  children,
  href,
  bodySelector: bodyClass,
  ...props
}: NavLinkProps) {
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

    await sleep(300);
    router.push(href);
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={isActive ? (e) => e.preventDefault() : handleTransition}
      className={linkStyle(isActive)}
    >
      {children}
    </Link>
  );
}
