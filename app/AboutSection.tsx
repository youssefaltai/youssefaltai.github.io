import Button from "@/components/Button";
import { NavArrowRight } from "@/components/Icons";
import { LogoLetter } from "@/components/Logo";
import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Image
          src="/Youssef al-Tai.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full dropShadow"
        />
        <div className="h-full w-full flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <h2 className={`${headingsFont.className} text-4xl font-bold`}>
              About Me
            </h2>
            <LogoLetter />
          </div>
          <p>
            I am Youssef al-Tai. I am a software engineer and mentor based in
            Egypt. I have 6+ years of experience creating software. I mentored
            hundreds of students in the field that are now experts in mobile and
            web development.
          </p>
          <Button variant="link" href="/about">
            Read More
            <NavArrowRight />
          </Button>
        </div>
      </div>
    </Section>
  );
}
