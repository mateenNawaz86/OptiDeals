export const config = {
  /** Public origin of the site, for canonical URLs, Open Graph and the sitemap. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
