import type { MetadataRoute } from "next";
import { i18n } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://protechies.com";

  const routes = ["", "/services", "/portfolio", "/about", "/contact"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add all localized routes
  for (const locale of i18n.locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemap;
}
