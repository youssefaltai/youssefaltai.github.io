import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import SecondaryButtonLink from "@/components/Button/ButtonLink/SecondaryButtonLink";
import ContactLink from "@/components/ContactLink";
import ProfilePicture from "@/components/ProfilePicture";
import Subtitle, { Emphasis } from "@/components/Slogan";
import { contactLinks } from "@/lib/contact";

export default function Home() {
  return (
    <div className="w-full px-2 sm:px-0 flex flex-grow flex-col justify-center items-center py-4 md:py-8 gap-8 md:gap-16">
      <Hero />
      <ContactLinks />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <ProfilePicture />

      <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
        <Subtitle>I design & build frontends that <Emphasis>work.</Emphasis></Subtitle>
        <Actions />
      </div>
    </div>
  );
}


function Actions() {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-4 w-full">
      <PrimaryButtonLink href={'/request'} className="w-full sm:w-auto">
        Work with me
      </PrimaryButtonLink>
      <SecondaryButtonLink href={'/work'} className="w-full sm:w-auto">
        View my work
      </SecondaryButtonLink>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
      {contactLinks.map((link, i) => (<ContactLink key={i} link={link} />))}
    </div>
  );
}



