import WhiteBoard, { Drawing } from "@/components/Whiteboard";
import { LaptopWireframe, MobileWireframe } from "@/components/Wireframes";

import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import { LinkButton } from "@/components/Button";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <Section>
      <h2 className={`${headingsFont.className} text-4xl font-bold`}>
        Services
      </h2>
      <ServiceRow
        direction="left"
        title="Mobile Development"
        description="I create robust and beautiful mobile apps using Flutter and Riverpod, handling everything from UI/UX design to publishing."
        learnMore="/services/mobile"
        illustration={
          <Image
            src="/services/Mobile Development.png"
            alt="Mobile Development"
            width={360}
            height={320}
            className="object-contain max-w-full"
          />
        }
      />
      <ServiceRow
        direction="right"
        title="Full-Stack Development"
        description="I provide comprehensive frontend and backend development using the latest technologies like React, Next.js, Node.js, and Python."
        learnMore="/services/full-stack"
        illustration={
          <Image
            src="/services/Full Stack Development.png"
            alt="Full-Stack Development"
            width={456}
            height={216}
            className="object-contain"
          />
        }
      />
      <ServiceRow
        direction="left"
        title="UI/UX Design"
        description="I design and research user-friendly and visually appealing interfaces for web and mobile applications."
        learnMore="/services/design"
        illustration={
          <Image
            src="/services/UI UX Design.png"
            alt="UI/UX Design"
            width={360}
            height={244}
            className="object-contain"
          />
        }
      />
      <ServiceRow
        direction="right"
        title="Mentoring"
        description="I offer one-on-one sessions, teaching practical mobile and full-stack development to help you secure and excel in a job."
        learnMore="/services/mentoring"
        illustration={
          <Image
            src="/services/Mentoring.png"
            alt="Mentoring"
            width={430}
            height={300}
            className="object-contain"
          />
        }
      />
    </Section>
  );
}

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
    <section
      className={`h-96 w-full flex
        justify-center items-center
        ${direction === "left" ? "md:justify-start" : "md:justify-end"}
      `}
    >
      {illustration}
    </section>
  );
  const textComponent = (
    <section className="h-full w-full flex flex-col gap-4">
      <h3 className={`${headingsFont.className} text-3xl font-bold`}>
        {title}
      </h3>
      <p>{description}</p>
      <LinkButton href={learnMore}>Learn More</LinkButton>
    </section>
  );

  return (
    <article
      className={`flex flex-col
          md:gap-12
         ${
           direction === "left" ? "md:flex-row" : "md:flex-row-reverse"
         } justify-center items-center`}
    >
      {illustrationComponent}
      {textComponent}
    </article>
  );
}
