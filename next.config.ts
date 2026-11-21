import type { NextConfig } from "next";
import { codeInspectorPlugin } from "code-inspector-plugin";

/**
 * The site is exported as static files (`out/`) and hosted on Cloudflare Pages.
 * Static hosting means two things live outside this file:
 * - response headers are in `public/_headers` (Cloudflare's format);
 * - images are not resized at request time, so files in `public/images` are pre-sized.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
    // code-inspector-plugin's typings return `any`; narrow to Turbopack's rules type.
    rules: codeInspectorPlugin({
      bundler: "turbopack",
      hotKeys: ["altKey"],
      showSwitch: true,
    }) as NonNullable<NextConfig["turbopack"]>["rules"],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
