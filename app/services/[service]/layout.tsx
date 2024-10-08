import React from "react";
import { getService, services } from "../services";
import { redirect } from "next/navigation";
import { NavLink } from "@/components/NavLink";
import Loader from "@/app/Loader";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const serviceDetails = getService(params.service);
  if (!serviceDetails) return { title: "Service Not Found" };

  return {
    title: `${serviceDetails.title} - My Services`,
    description: serviceDetails.sections.overview.join(" "),
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service,
  }));
}

function Service({
  params: { service },
  children,
}: {
  params: { service: string };
  children: React.ReactNode;
}) {
  const serviceDetails = getService(service);
  if (!serviceDetails) redirect("/services");

  return (
    <>
      <Loader bodySelector="#serviceDetails" />
      <div className="flex flex-col gap-6 md:border-r-2 md:border-gray-200 md:pr-12">
        <h2 className="text-3xl font-bold">{serviceDetails.title}</h2>
        <ul className="flex flex-col gap-4 md:gap-6">
          <li>
            <NavLink
              href={`/services/${service}/overview`}
              bodySelector="#serviceInnerDetails"
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              href={`/services/${service}/why-me`}
              bodySelector="#serviceInnerDetails"
            >
              Why Choose Me
            </NavLink>
          </li>
          <li>
            <NavLink
              href={`/services/${service}/process`}
              bodySelector="#serviceInnerDetails"
            >
              Process
            </NavLink>
          </li>
          <li>
            <NavLink
              href={`/services/${service}/pricing`}
              bodySelector="#serviceInnerDetails"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className="trans col-span-2 flex flex-col gap-6 md:px-12"
        id="serviceInnerDetails"
      >
        {children}
      </div>
    </>
  );
}

export default Service;
