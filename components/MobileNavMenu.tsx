"use client";
import { useState } from "react";
import { navLinks } from "@/lib/navigation";

export default function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <button
          aria-label="Open menu"
          className="p-2 rounded focus:bg-white focus:shadow transition-all duration-300"
          onClick={() => setMenuOpen(true)}
        >
          <svg className="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-50/95 flex flex-col items-center justify-center z-50 transition-all duration-300 ease-out animate-fade-in animate-slide-in-from-bottom">
          <button
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 rounded focus:bg-white focus:shadow transition-all duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col gap-8 items-center">
              {navLinks.map((navLink, i) => (
                <li key={i} className="transition-all duration-300 ease-in-out">
                  <a
                    href={navLink.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl transition-colors duration-300 text-inherit hover:text-spring-400 focus:text-spring-400 outline-none"
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
} 