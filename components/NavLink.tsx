"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
export default function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();
  const isCurrentPage =
    pathName === href ||
    pathName === `${href}/` ||
    (pathName === "/" && href === "/") ||
    (pathName.startsWith(href) && href !== "/") ||
    (pathName.startsWith(`${href}/`) && href !== "/");
  return (
    <>
      <Link
        className={`font-bold flex flex-col gap-0.5 justify-start ${
          isCurrentPage ? "navlink-active" : ""
        }
        text-nowrap
        `}
        href={href}
      >
        {children}
      </Link>

      {isCurrentPage && <div className="navlink-underline" />}
    </>
  );
}
