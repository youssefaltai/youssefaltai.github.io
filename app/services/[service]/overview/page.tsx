import React from "react";
import Loader from "@/app/Loader";
import { getService } from "../../services";
import { redirect } from "next/navigation";

function Overview({ params: { service } }: { params: { service: string } }) {
  const serviceDetails = getService(service);
  if (!serviceDetails) redirect("/services");
  return (
    <>
      <Loader bodySelector="#serviceInnerDetails" />
      <h3 className="text-3xl font-semibold">Overview</h3>
      <div className="flex flex-col gap-4">
        {serviceDetails.sections.overview.map((text, index) => (
          <p key={index} className="text-lg">
            {text}
          </p>
        ))}
      </div>
    </>
  );
}

export default Overview;
