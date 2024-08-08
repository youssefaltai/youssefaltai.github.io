"use client";

import { MenuIcon, Xmark } from "@/components/Icons";
import { useState } from "react";
import NavLink from "./NavLink";

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-50 z-20 flex flex-col items-center justify-center gap-6">
          <div className="flex justify-end w-full py-6 px-8">
            <button onClick={() => setIsMenuOpen(false)}>
              <Xmark />
            </button>
          </div>
          <ul className="h-full flex flex-col justify-center items-center gap-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink href="/work">Work</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
