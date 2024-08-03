import Button from "@/components/Button";
import { Compass } from "@/components/Icons";
import Section from "@/components/Section";
import { Merriweather } from "next/font/google";

const font = Merriweather({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <h2 className={`${font.className} text-4xl font-bold`}>Services</h2>
      </Section>
      <Section>
        <h2 className={`${font.className} text-4xl font-bold`}>About Me</h2>
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
