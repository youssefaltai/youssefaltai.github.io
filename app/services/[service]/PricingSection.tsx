import Button from "@/components/Button";
import Section from "@/components/Section";
import { headingsFont } from "@/lib";
import { PricingType, ServiceType } from "@/services";

export default function PricingSection({ service }: { service: ServiceType }) {
  return (
    <Section>
      <div className="flex flex-col max-w-screen-2xl gap-6">
        <h2 className={`${headingsFont.className} text-4xl font-bold`}>
          Pricing
        </h2>
        <div className="flex gap-8">
          {service.pricing.map((pricing, index) => (
            <PricingCard key={index} {...pricing} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function PricingCard({ title, price, description, includes }: PricingType) {
  return (
    <div className="flex flex-col gap-8 p-8 justify-between items-center border-2 border-b-8 border-neutral-800 rounded-2xl w-full">
      <div className="flex flex-col gap-4">
        <h3 className={`${headingsFont.className} text-3xl font-bold`}>
          {title}
        </h3>
        <p className="text-2xl bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-2xl w-min text-nowrap">
          {price}
        </p>
        <p>{description}</p>
        <ul>
          {includes.map((include, index) => (
            <li key={index} className="flex gap-2 items-start w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="min-w-6 min-h-6"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {include}
            </li>
          ))}
        </ul>
      </div>
      <Button>Get A Quote</Button>
    </div>
  );
}