import React from "react";
import { getService } from "../layout";
import Loader from "@/app/Loader";

function Process({ params: { service } }: { params: { service: string } }) {
  //   return <>process</>;
  const serviceDetails = getService(service);
  return (
    <>
      <h3 className="text-3xl font-semibold">Process</h3>
      <div className="flex flex-col gap-4">
        {serviceDetails.process.map((point, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-2xl font-semibold">
              <span className="text-3xl font-semibold text-blue-600 mr-2">
                {index + 1}.
              </span>
              {point.title}
            </h4>
            <p className="text-lg font-normal">{point.description}</p>
          </div>
        ))}
      </div>
      <Loader bodySelector="#serviceInnerDetails" />
    </>
  );
}

export default Process;