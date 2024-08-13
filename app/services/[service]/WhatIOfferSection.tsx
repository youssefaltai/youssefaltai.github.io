import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import { ServiceType, WhatIOfferType } from "@/services";

export default function WhatIOfferSection({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <Section>
      <div id="details">
        <div className="flex flex-col max-w-screen-2xl gap-6">
          <h2 className={`${headingsFont.className} text-4xl font-bold`}>
            What I Offer
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {service.whatIOffer.map((whatIOffer, index) => (
              <WhatIOfferRow key={index} {...whatIOffer} n={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhatIOfferRow({
  n,
  title,
  description,
}: WhatIOfferType & { n: number }) {
  return (
    <div className="flex gap-4">
      <span className={`${headingsFont.className} text-5xl text-blue-600`}>
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
