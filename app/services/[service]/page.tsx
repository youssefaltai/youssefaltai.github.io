import {
  design,
  fullStackDevelopment,
  mobileDevelopment,
  ServiceType,
} from "@/services";
import ServiceHeroSection from "./ServiceHeroSection";
import WhatIOfferSection from "./WhatIOfferSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseMeSection from "./WhyChooseMeSection";
import PricingSection from "./PricingSection";
import ContactSection from "@/app/ContactSection";
import { redirect } from "next/navigation";

export default function Page({
  params: { service },
}: {
  params: { service: string };
}) {
  const s = ((): ServiceType | undefined => {
    switch (service) {
      case "mobile":
        return mobileDevelopment;
      case "full-stack":
        return fullStackDevelopment;
      case "design":
        return design;
    }
  })();

  if (!s) redirect("/");

  return (
    <>
      <ServiceHeroSection service={s} />
      <WhatIOfferSection service={s} />
      <HowItWorksSection service={s} />
      <WhyChooseMeSection service={s} />
      <PricingSection service={s} />
      <ContactSection />
    </>
  );
}
