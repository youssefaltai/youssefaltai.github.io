import Section from "@/components/Section";
import ContactMeButton from "./ContactMeButton";
import Button from "@/components/Button";
import { Compass } from "@/components/Icons";
import { headingsFont } from "@/lib";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2
          className={`${headingsFont.className} text-4xl md:text-5xl font-bold md:text-nowrap`}
        >
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
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center-items-center">
          <Button variant="secondary" href="/work">
            <Compass />
            Explore My Work
          </Button>
          <ContactMeButton>Let&apos;s Work Together</ContactMeButton>
        </div>
      </div>
    </Section>
  );
}
