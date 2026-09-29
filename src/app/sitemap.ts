import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mazixstudios.com";
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/industries",
    "/about",
    "/process",
    "/contact",
    "/privacy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
