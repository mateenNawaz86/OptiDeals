import type { NextConfig } from "next";
import { codeInspectorPlugin } from "code-inspector-plugin";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
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
    remotePatterns: [],
  },
  // Next's NextConfig.headers() type requires a Promise-returning function
  // even though this implementation is synchronous.
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
