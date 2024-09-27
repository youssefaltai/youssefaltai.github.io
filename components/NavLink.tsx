"use client";

import Link from "next/link";
import { HTMLProps } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, handleTransition } from "@/lib";

export const linkStyle = (isActive: boolean) =>
  cn(
    "text-xl md:text-2xl font-normal opacity-60 transition-all duration-500 ease-out hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed",
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
  bodySelector,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const cleanHref = href.slice(1);
  const cleanPathname = pathname.slice(1);
  const isActive = cleanPathname.startsWith(cleanHref) && cleanHref !== "";

  const handleOnClick = isActive
    ? (e: any) => e.preventDefault()
    : (e: any) => {
        e.preventDefault();
        handleTransition({
          bodySelector,
          onComplete: () => router.push(href),
        });
      };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleOnClick}
      className={linkStyle(isActive)}
    >
      {children}
    </Link>
  );
}
