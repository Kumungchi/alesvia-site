import type { NextConfig } from "next";
import { getLocalizedRewriteRules } from "./lib/routes";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: getLocalizedRewriteRules(),
    };
  },
};

export default nextConfig;
