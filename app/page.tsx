import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Logo from "@/components/Logo";
import SocialMediaLink from "@/components/SocialMediaLink";
import { TransitionLink } from "@/components/TransitionLink";
import { github, linkedin } from "@/contact";
import Bio from "./Bio";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-12 py-12">
      <Logo />
      <Bio />
      <CallToAction>Contact Me</CallToAction>
      <nav>
        <ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <li>
            <TransitionLink href="/services">Services</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/work">My Work</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/about">About Me</TransitionLink>
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
  );
}
