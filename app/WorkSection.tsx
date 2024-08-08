import { LinkButton } from "@/components/Button";
import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import Image from "next/image";

export default function WorkSection() {
  return (
    <Section>
      <h2 className={`${headingsFont.className} text-4xl font-bold`}>Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-6 pt-8">
        <WorkProject
          title="Home Service"
          description="A comprehensive platform designed and built to connect users in the MENA region with service providers."
          image="/Eram Group Home Service by Youssef al-Tai.png"
          href="/work/home-service"
        />
        <WorkProject
          title="Students Information System"
          description="My graduation project at the Faculty of Computers and Artificial Intelligence, Cairo University. This extensive system was designed to manage various academic and administrative tasks for the faculty."
          image="/Faculty of Computers and Artificial Intelligence Students Information System by Youssef al-Tai.png"
          href="/work/students-information-system"
        />
      </div>
    </Section>
  );
}

type WorkProjectProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};
function WorkProject({ title, description, image, href }: WorkProjectProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        alt={title}
        width={548}
        height={400}
        className="rounded-xl w-full"
      />
      <h3 className={`${headingsFont.className} text-2xl font-bold`}>
        {title}
      </h3>
      <p className="h-full">{description}</p>
      <LinkButton href={href}>View Project</LinkButton>
    </div>
  );
}
