import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import { HowItWorksType, ServiceType } from "@/services";

export default function HowItWorksSection({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2 className={`${headingsFont.className} text-4xl font-bold`}>
          How It Works
        </h2>
        <div className="flex flex-col relative gap-8">
          {service.howItWorks.map((howItWorks, index) => (
            <HowItWorksRow key={index} {...howItWorks} n={index + 1} />
          ))}
          <div className="absolute top-0 left-0 w-2 h-[85%] ml-5 mt-6 bg-blue-600 z-10" />
        </div>
      </div>
    </Section>
  );
}

function HowItWorksRow({
  n,
  title,
  description,
}: HowItWorksType & { n: number }) {
  return (
    <div className="z-20 flex gap-4">
      <span
        className={`${headingsFont.className} text-2xl bg-blue-600 rounded-full min-w-12 min-h-12 max-w-12 max-h-12 text-white flex justify-center items-center`}
      >
        {n}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className={`${headingsFont.className} text-2xl font-bold`}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
