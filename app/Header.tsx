import Link from "next/link";
import ContactMeButton from "@/app/ContactMeButton";
import Logo from "@/components/Logo";
import NavLink from "./NavLink";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-neutral-50 w-full sticky top-0 z-50">
      <div className="w-full flex justify-between items-center max-w-screen-2xl px-responsive py-6 ">
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav className="hidden md:flex gap-8">
          <ul className="flex justify-center items-end gap-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/work">Work</NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:inline-block">
          <ContactMeButton>Contact Me</ContactMeButton>
        </div>
        <MenuButton />
      </div>
    </header>
  );
}
