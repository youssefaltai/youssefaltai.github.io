import Section from "@/components/Section";
import Button from "@/components/Button";
import { Compass } from "@/components/Icons";
import { headingsFont } from "@/lib";
import { ServiceType } from "@/services";
import { redirect } from "next/navigation";
import ExploreServiceButton from "@/app/ExploreServiceButton";

export default function ServiceHeroSection({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2
          className={`${headingsFont.className} text-4xl md:text-5xl font-bold md:text-nowrap`}
        >
          {service.title}
        </h2>
        <p>{service.description}</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center-items-center">
          <ExploreServiceButton />
        </div>
      </div>
    </Section>
  );
}
