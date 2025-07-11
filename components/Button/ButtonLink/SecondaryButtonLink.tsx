import clsx from "clsx";
import Link from "next/link";
import { type ButtonLinkProps } from "../button";

export default function SecondaryButtonLink({ children, href, className }: ButtonLinkProps) {
  return (
    <Link href={href}
      className={
        clsx(
          "bg-gray-50 hover:bg-white active:bg-gray-100 text-spring-400 border border-spring-400 hover:shadow rounded-sm px-4 py-3 transition-all duration-300",
          className
        )
      }
    >
      {children}
    </ Link>
  );
}