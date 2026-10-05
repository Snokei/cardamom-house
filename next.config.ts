import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Drop Next's unconditional legacy polyfills — Lighthouse ~13 KiB.
  // Safe for Chrome/Edge/Firefox 111+ and Safari 16.4+ (Next's own baseline).
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
};

export default nextConfig;
