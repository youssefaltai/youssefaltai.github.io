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
  ];
}
