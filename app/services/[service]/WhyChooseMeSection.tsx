import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import { ServiceType } from "@/services";

export default function WhyChooseMeSection({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2 className={`${headingsFont.className} text-4xl font-bold`}>
          Why Choose Me?
        </h2>
        <div className="flex justify-between w-full gap-8">
          {service.whyChooseMe.map(
            ({ icon, title, description }, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start gap-2 w-full"
              >
                <div className="flex gap-2">
                  {icon}
                  <h3
                    className={`${headingsFont.className} text-2xl font-bold`}
                  >
                    {title}
                  </h3>
                </div>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
