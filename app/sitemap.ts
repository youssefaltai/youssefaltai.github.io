import { baseUrl, serviceSections } from "@/lib";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/work`,
    },
    {
      url: `${baseUrl}/contact`,
    },

    // Services

    /// Web Development
    ...serviceSections.map((section) => ({
      url: `${baseUrl}/services/web/${section}`,
    })),

    /// Mobile Development
    ...serviceSections.map((section) => ({
      url: `${baseUrl}/services/mobile/${section}`,
    })),

    /// UI/UX Design
    ...serviceSections.map((section) => ({
      url: `${baseUrl}/services/design/${section}`,
    })),

    // Work

    /// Meridian
    {
      url: `${baseUrl}/work/meridian`,
    },

    /// Home Service
    {
      url: `${baseUrl}/work/home-service`,
    },

    /// SIS
    {
      url: `${baseUrl}/work/sis`,
    },
  ];
}
