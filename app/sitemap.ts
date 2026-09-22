import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/servicos", "/contato"];
  const serviceRoutes = services.map((service) => `/servicos/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/servicos" ? 0.8 : 0.7,
  }));
}

