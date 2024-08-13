import {
  design,
  fullStackDevelopment,
  mentoring,
  mobileDevelopment,
  ServiceType,
} from "@/services";
import ServiceHeroSection from "./ServiceHeroSection";
import WhatIOfferSection from "./WhatIOfferSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseMeSection from "./WhyChooseMeSection";
import PricingSection from "./PricingSection";
import ContactSection from "@/app/ContactSection";

export default function Page({
  params: { service },
}: {
  params: { service: string };
}) {
  const s = ((): ServiceType => {
    switch (service) {
      case "mobile":
        return mobileDevelopment;
      case "full-stack":
        return fullStackDevelopment;
      case "design":
        return design;
      case "mentoring":
        return mentoring;
      default:
        return mentoring;
    }
  })();

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
