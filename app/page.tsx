import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import SecondaryButtonLink from "@/components/Button/ButtonLink/SecondaryButtonLink";
import ContactLink from "@/components/ContactLink";
import ProfilePicture from "@/components/ProfilePicture";
import Subtitle, { Emphasis } from "@/components/Slogan";
import { contactLinks } from "@/lib/contact";
import { env, pageUrl } from "@/lib/env";

export const metadata = {
  title: "Youssef al-Tai | I design & build frontends that work.",
  description: "I design & build frontends that work.",
  openGraph: {
    url: pageUrl('/'),
    type: "website",
    title: "Youssef al-Tai | I design & build frontends that work.",
    description: "Hire Youssef al-Tai to build clear, usable frontends that convert and delight. Clean code, thoughtful design, and results that keep users engaged.",
    images: [pageUrl('/images/og/og-image.jpg')],
    siteName: env.name,
  },
  twitter: {
    card: "summary_large_image",
    domain: env.siteUrl.replace(/^https?:\/\//, ''),
    url: pageUrl('/'),
    title: "Youssef al-Tai | I design & build frontends that work.",
    description: "Hire Youssef al-Tai to build clear, usable frontends that convert and delight. Clean code, thoughtful design, and results that keep users engaged.",
    images: [pageUrl('/images/og/og-image.jpg')],
  },
};

export default function Home() {
  return (
    <div className="w-full flex flex-grow flex-col justify-center items-center gap-16 px-4 py-16 md:py-0">
      <Hero />
      <ContactLinks />
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <ProfilePicture />

        <div className="flex flex-col items-start gap-8 md:gap-4 lg:max-w-[517px]">
          <Subtitle>I design & build frontends that <Emphasis>work.</Emphasis></Subtitle>
          <Actions />
        </div>
      </div>
    </>
  );
}


function Actions() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center w-full md:w-fit gap-4">
      <PrimaryButtonLink href={'/request'} className="w-full md:w-fit">
        Work with me
      </PrimaryButtonLink>
      <SecondaryButtonLink href={'/work'} className="w-full md:w-fit">
        View my work
      </SecondaryButtonLink>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {contactLinks.map((link, i) => (<ContactLink key={i} link={link} />))}
    </div>
  );
}



