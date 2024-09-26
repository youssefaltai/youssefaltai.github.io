import React from "react";
import { getService } from "../layout";
import Loader from "@/app/Loader";

function Overview({ params: { service } }: { params: { service: string } }) {
  const serviceDetails = getService(service);
  return (
    <>
      <h3 className="text-3xl font-bold">Overview</h3>
      <div className="flex flex-col gap-4">
        {serviceDetails.overview.map((text, index) => (
          <p key={index} className="text-lg">
            {text}
          </p>
        ))}
      </div>
      <Loader bodySelector="#serviceInnerDetails" />
    </>
  );
}

export default Overview;
