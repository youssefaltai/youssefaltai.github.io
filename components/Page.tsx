import React, { HTMLProps, PropsWithChildren } from "react";
import Logo from "./Logo";
import BackToHomeLink from "@/app/BackToHomeLink";
import { cn } from "@/lib";

type PageProps = HTMLProps<HTMLDivElement> &
  PropsWithChildren<{
    showLogo?: boolean;
    showBack?: boolean;
  }>;

export default function Page({
  children,
  showLogo = true,
  showBack = true,
  ...props
}: PageProps) {
  return (
    <main
      {...props}
      className={cn(
        "flex flex-col justify-center items-center gap-16 py-16 w-full max-w-screen-sm md:max-w-screen-lg",
        props.className
      )}
    >
      {showLogo && <Logo />}
      {children}
      {showBack && <BackToHomeLink />}
    </main>
  );
}
