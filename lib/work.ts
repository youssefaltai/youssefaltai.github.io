export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  client: string;
  blurb: string;
  challenge: string;
  role: string[];
  tech: string[];
  impact: string[];
  images: number; /// The number of images under public/images/projects/[slug]/gallery
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "meridian",
    title: "Meridian",
    subtitle: "White-label AI platform for luxury travel advisors",
    date: "February 2025",
    client: "Forbes Travel Guide",
    blurb: "Built core features, reusable components, and multiple apps end-to-end under tight deadlines.",
    challenge: "Building a complex, white-label, multi-tenant platform that luxury travel advisors and Forbes inspectors rely on.",
    role: [
      "Built Itinerary Builder feature end-to-end",
      "Architected reusable media/document uploader",
      "Built Forbes CMS and Free Trial Portal apps",
      "Developed Traveler Invitation feature with complex edge cases",
      "Built Analytics Dashboards",
      "Implemented multi-tenant config at all layers",
      "Improved dev/QA workflows with custom tooling"
    ],
    tech: [
      "Monorepo",
      "Shared design system",
      "API mocking",
      "Performance optimizations"
    ],
    impact: [
      "Delivered massive multi-app platform in ~4 months",
      "Enabled Forbes Travel Guide inspectors to manage verified guides",
      "Improved dev team productivity with custom scripts & tooling"
    ],
    images: 5,
    links: [
      {
        label: "Visit Landing Page",
        url: "https://meridianverified.com"
      }
    ],
  }
];
