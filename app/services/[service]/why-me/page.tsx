import React from "react";
import { getService } from "../layout";
import FancyBullet from "@/components/icons/FancyBullet";
import Loader from "@/app/Loader";

function WhyMe({ params: { service } }: { params: { service: string } }) {
  // return <>why me</>;
  const serviceDetails = getService(service);
  return (
    <>
      <Loader bodySelector="#serviceInnerDetails" />
      <h3 className="text-3xl font-semibold">Why Choose Me</h3>
      {serviceDetails.whyMe.map((point, index) => (
        <div key={index} className="flex flex-col">
          <h4 className="text-2xl font-semibold flex items-center gap-2">
            <FancyBullet />
            {point.title}
          </h4>
          <p className="text-lg">{point.description}</p>
        </div>
      ))}
    </>
  );
}

export default WhyMe;
