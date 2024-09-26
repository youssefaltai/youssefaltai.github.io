import Link from "next/link";
import React, { HTMLProps } from "react";

type SocialMediaLinkProps = HTMLProps<HTMLAnchorElement> & {
  href: string;
};

function SocialMediaLink({ children, href, ...props }: SocialMediaLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-normal opacity-50 transition-all duration-500 ease-out hover:opacity-100"
    >
      {children}
    </Link>
  );
}

export default SocialMediaLink;
