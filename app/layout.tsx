import Link from "next/link";
import type { Metadata } from "next";
import { navLinks, NavLinkType } from "@/lib/navigation";
import MobileNavMenu from "@/components/MobileNavMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youssef al-Tai",
  description: "I design & build frontends that work.",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode; }>;
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 antialiased">
        <Header />
        <main className="flex flex-col flex-grow container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200 relative z-20">
      <div className="flex justify-between items-center container mx-auto p-4 md:p-8">
        <Brand />
        <MobileNavMenu />
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex justify-center items-center container mx-auto p-4 md:p-8 text-center text-xs md:text-sm text-gray-400">
        © {new Date().getFullYear()} Youssef al-Tai. All rights reserved.
      </div>
    </footer>
  );
}

function Brand() {
  return (
    <h1 className="font-bold md:text-lg hover:text-shadow">
      <Link href={'/'} >
        Youssef al-Tai
      </Link>
    </h1>
  );
}

function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto text-center">
      {navLinks.map((navLink, i) => (
        <li key={i} className="w-full md:w-auto">
          <NavLink navLink={navLink} />
        </li>
      ))}
    </ul>
  );
}

type NavLinkProps = { navLink: NavLinkType; }
function NavLink({ navLink: { label, href } }: NavLinkProps) {
  return (
    <Link href={href} className='transition-all duration-300 p-2 hover:text-spring-400'>
      {label}
    </Link>
  );
}