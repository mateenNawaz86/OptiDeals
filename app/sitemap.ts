import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Indexable pages only. /terms and /privacy are placeholders marked noindex; add them back
 * here once their final text is published.
 */
const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
] as const;

// Required for static export: render this file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
