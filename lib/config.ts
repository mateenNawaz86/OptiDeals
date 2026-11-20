export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
  /** Public origin of the site, for canonical URLs, Open Graph and the sitemap. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Serves in-memory fixtures instead of the backend; set to "false" to go live. */
  useMockApi: process.env.NEXT_PUBLIC_USE_MOCK_API !== "false",
} as const;
