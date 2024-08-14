import Section from "@/components/Section";
import { headingsFont } from "@/lib";

export default function Page() {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2 className={`${headingsFont.className} text-4xl font-bold`}>
          About Me
        </h2>
        <p>
          I&apos;m Youssef, a software engineer who started young. My journey
          began watching my parents work with 3D and 2D modeling software like
          3Ds Max and Adobe Flash. I was intrigued and started experimenting
          with these tools myself. One day, I accidentally wrote my first lines
          of code using Actionscript in Adobe Flash. I was fascinated by how
          simple code could bring my animations to life, and this sparked my
          interest in creating interactive projects.
        </p>
        <p>
          As I explored further, I stumbled upon Game Maker Studio and Unity
          Engine. Although I didn&apos;t know much about C#, I followed
          tutorials and created small games. This hands-on approach helped me
          understand programming better and deepened my passion for development.
        </p>
        <p>
          After finishing high school with a top grade of 98%, I enrolled in the
          Faculty of Computers and Artificial Intelligence at Cairo University.
          Before starting, I dived into learning C++ but found it too low-level
          for my needs. So, I shifted to Python and JavaScript, which opened up
          web development to me. I quickly fell in love with TypeScript and
          became skilled in technologies like React, Django, Flask, and Next.js.
        </p>
        <p>
          During my time at university, I was known for helping classmates and
          sharing my knowledge. This reputation led to a recommendation for a
          job at Eram Group, a Saudi Arabian company. There, I had to quickly
          learn Flutter and mobile development. I excelled in this new area and
          led the development of their main project, “Home Service,” a platform
          connecting customers with service providers in the MENA region.
        </p>
        <p>
          In my final academic year, I worked with a team on a major project to
          revamp the faculty&apos;s internal system. We improved its performance
          and added crucial features to make it more reliable and user-friendly.
        </p>
        <p>
          This experience, along with my background, has shaped me into a
          versatile and dedicated software engineer, passionate about creating
          effective solutions and helping others succeed.{" "}
        </p>
      </div>
    </Section>
  );
}
