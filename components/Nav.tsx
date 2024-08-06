import Link from "next/link";
import Button from "./Button";
import LogoSvg from "./Logo";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center bg-neutral-50 py-4 px-4">
      <div className="container justify-between items-center h-full">
        <Link href={"/"}>
          <LogoSvg />
        </Link>

        <ul className="flex justify-center items-end gap-8">
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

        <Button>Contact Me</Button>
      </div>
    </nav>
  );
}
