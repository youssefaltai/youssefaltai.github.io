import React from "react";
import { getService } from "../layout";
import CallToAction from "@/components/CallToAction";
import Loader from "@/app/Loader";
import { cn } from "@/lib";

function Pricing({ params: { service } }: { params: { service: string } }) {
  const serviceDetails = getService(service);

  return (
    <>
      <h3 className="text-3xl font-semibold">Pricing</h3>
      <div className="flex flex-col gap-4">
        {serviceDetails.pricing.map((point, index) => (
          <div
            key={index}
            className={cn("flex flex-col gap-4 pb-6", {
              "border-b-2 border-gray-200":
                index !== serviceDetails.pricing.length - 1,
            })}
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-semibold">{point.title}</h4>
              <p className="text-lg font-normal">{point.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl md:text-2xl text-blue-600 font-semibold">
                {point.price
                  ? `Starting at $${point.price}`
                  : "Contact for pricing"}
              </p>
              <CallToAction className="text-base px-4 py-2 md:text-lg md:px-6 md:py-4">
                Get a Quote
              </CallToAction>
            </div>
          </div>
        ))}
      </div>

      <Loader bodySelector="#serviceInnerDetails" />
    </>
  );
}

export default Pricing;
