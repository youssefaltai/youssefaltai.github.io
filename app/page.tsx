import Button from "@/components/Button";
import { Compass, NavArrowRight } from "@/components/Icons";
import { LogoLetter } from "@/components/Logo";
import Mobile, { Android, IOS } from "@/components/Mobile";
import Section from "@/components/Section";
import {
  CSSIcon,
  DjangoIcon,
  HTMLIcon,
  JavascriptIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  TypescriptIcon,
} from "@/components/Technologies";
import WhiteBoard, { Drawing } from "@/components/Whiteboard";
import { LaptopWireframe, MobileWireframe } from "@/components/Wireframes";
import { Merriweather } from "next/font/google";
import Image from "next/image";

const font = Merriweather({ weight: "700", subsets: ["latin"] });

type ServiceRowProps = {
  title: string;
  description: string;
  learnMore: string;
  illustration: React.ReactNode;
  direction: "left" | "right";
};
function ServiceRow({
  title,
  description,
  learnMore,
  illustration,
  direction,
}: ServiceRowProps) {
  const illustrationComponent = (
    <div className="h-96 w-full relative">
      <div
        className={`absolute top-1/2 ${
          direction === "left" ? "left-0" : "right-0"
        } transform -translate-y-1/2`}
      >
        {illustration}
      </div>
    </div>
  );
  const textComponent = (
    <div className="h-full w-full flex flex-col gap-4">
      <h3 className={`${font.className} text-3xl font-bold`}>{title}</h3>
      <p>{description}</p>
      <Button variant="link">
        Learn More
        <NavArrowRight />
      </Button>
    </div>
  );

  if (direction === "left") {
    return (
      <div className="flex justify-center items-center">
        {illustrationComponent}
        {textComponent}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      {textComponent}
      {illustrationComponent}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Section>
        <div className="flex justify-center items-center">
          <div className="h-96 w-full relative">
            <div className={`absolute top-1/2 transform -translate-y-1/2`}>
              <Image
                src="/Youssef al-Tai.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full dropShadow"
              />
            </div>
          </div>
          <div className="h-full w-full flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <h2 className={`${font.className} text-4xl font-bold`}>
                About Me
              </h2>
              <LogoLetter />
            </div>
            <p>
              I am a full-stack developer and designer with a passion for
              creating beautiful and intuitive user experiences. I specialize in
              mobile development, web development, and UI/UX design.
            </p>
            <Button variant="link">
              Continue Reading My Bio
              <NavArrowRight />
            </Button>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className={`${font.className} text-4xl font-bold`}>Work</h2>
      </Section>
      <Section>
        <h2 className={`${font.className} text-4xl font-bold`}>Contact Me</h2>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <Section>
      <div className="flex flex-col max-w-min gap-6">
        <h2 className={`${font.className} text-5xl font-bold text-nowrap`}>
          I build software,
          <br /> design user interfaces,
          <br />
          and mentor developers.
        </h2>
        <p>
          I provide <strong>exceptional care and attention</strong>, ensuring
          you achieve your goals with the{" "}
          <strong>utmost support and expertise</strong>.
        </p>
        <div className="flex gap-6 justify-center-items-center">
          <Button variant="secondary">
            <Compass />
            <p>Explore My Work</p>
          </Button>
          <Button>Let&apos;s Work Together</Button>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const fullStackTechnologies = [
    <HTMLIcon />,
    <CSSIcon />,
    <JavascriptIcon />,
    <TypescriptIcon />,
    <NextJsIcon />,
    <ReactIcon />,
    <PythonIcon />,
    <DjangoIcon />,
  ];

  return (
    <Section>
      <h2 className={`${font.className} text-4xl font-bold`}>Services</h2>
      <ServiceRow
        direction="left"
        title="Mobile Development"
        description="I create robust and beautiful mobile apps using Flutter and Riverpod, handling everything from UI/UX design to publishing."
        learnMore="Learn More"
        illustration={
          <>
            <Mobile />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
              <strong className="text-3xl text-nowrap">Develop for both</strong>
              <div className="flex w-full justify-between items-end">
                <Android />
                <IOS />
              </div>
            </div>
          </>
        }
      />
      <ServiceRow
        direction="right"
        title="Full-Stack Development"
        description="I provide comprehensive frontend and backend development using the latest technologies like React, Next.js, Node.js, and Python."
        learnMore="Learn More"
        illustration={
          <div className="grid grid-cols-4 gap-4">
            {fullStackTechnologies.map((technology, index) => (
              <div key={index} className="w-24 h-24">
                {technology}
              </div>
            ))}
          </div>
        }
      />
      <ServiceRow
        direction="left"
        title="UI/UX Design"
        description="I design and research user-friendly and visually appealing interfaces for web and mobile applications."
        learnMore="Learn More"
        illustration={
          <>
            <div className="absolute top-1/2 transform -translate-y-1/2">
              <LaptopWireframe />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 pb-20">
              <MobileWireframe />
            </div>
          </>
        }
      />
      <ServiceRow
        direction="right"
        title="Mentoring"
        description="I offer personalized mentoring and coaching for developers looking to advance their skills and careers."
        learnMore="Learn More"
        illustration={
          <div className="relative">
            <WhiteBoard />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Drawing />
            </div>
          </div>
        }
      />
    </Section>
  );
}
