import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Logo from "@/components/Logo";
import SocialMediaLink from "@/components/SocialMediaLink";
import { github, linkedin } from "@/contact";
import Bio from "./Bio";
import CallToAction from "@/components/CallToAction";
import Loader from "./Loader";
import { NavLink } from "@/components/NavLink";

export default function Home() {
  return (
    <>
      <Loader scrollToTop />
      <main className="flex flex-col justify-center items-center gap-16 py-16">
        <Logo />
        <Bio />
        <CallToAction>Contact Me</CallToAction>
        <nav>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/work">My Work</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Me</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <SocialMediaLink href={github.url}>
            <GitHubIcon className="fill-blue-600" />
          </SocialMediaLink>
          <SocialMediaLink href={linkedin.url}>
            <LinkedInIcon className="fill-blue-600" />
          </SocialMediaLink>
        </div>
      </main>
    </>
  );
}
