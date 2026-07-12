import type { NextConfig } from "next";
import { getLegacyRedirectRules, getLocalizedRewriteRules } from "./lib/routes";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: getLocalizedRewriteRules(),
    };
  },
  async redirects() {
    return getLegacyRedirectRules();
  },
};

export default nextConfig;
