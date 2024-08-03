"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
export default function NavLink({ href, children }: NavLinkProps) {
  const isCurrentPage = usePathname() === href;
  return (
    <>
      <Link
        className={`font-bold flex flex-col gap-0.5 justify-start ${
          isCurrentPage ? "navlink-active" : ""
        }`}
        href={href}
      >
        {children}
      </Link>

      {isCurrentPage && <div className="navlink-underline" />}
    </>
  );
}
