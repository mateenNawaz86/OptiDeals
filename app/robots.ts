import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

// Required for static export: render this file at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  };
}
