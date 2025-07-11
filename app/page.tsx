import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import SecondaryButtonLink from "@/components/Button/ButtonLink/SecondaryButtonLink";
import ContactLink from "@/components/ContactLink";
import ProfilePicture from "@/components/ProfilePicture";
import Subtitle, { Emphasis } from "@/components/Slogan";
import { contactLinks } from "@/lib/contact";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-center items-center py-8 gap-16">
      <Hero />
      <ContactLinks />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex items-center gap-12">
      <ProfilePicture />

      <div className="flex flex-col items-start gap-6">
        <Subtitle>I design & build frontends that <Emphasis>work.</Emphasis></Subtitle>
        <Actions />
      </div>
    </div>
  );
}


function Actions() {
  return (
    <div className="flex justify-center items-center gap-4">
      <PrimaryButtonLink href={'/request'}>
        Work with me
      </PrimaryButtonLink>
      <SecondaryButtonLink href={'/work'}>
        View my work
      </SecondaryButtonLink>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="flex justify-center items-center gap-12">
      {contactLinks.map((link, i) => (<ContactLink key={i} link={link} />))}
    </div>
  );
}



