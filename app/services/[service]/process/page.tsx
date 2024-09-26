import React from "react";
import { getService } from "../layout";

function Process({ params: { service } }: { params: { service: string } }) {
  //   return <>process</>;
  const serviceDetails = getService(service);
  return (
    <>
      <h3 className="text-3xl font-bold">Process</h3>
      <div className="flex flex-col gap-4">
        {serviceDetails.process.map((point, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-2xl font-semibold">
              <span className="text-3xl font-bold text-blue-600 mr-2">
                {index + 1}.
              </span>
              {point.title}
            </h4>
            <p className="text-lg font-normal">{point.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Process;
