import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    VERSION: process.env.npm_package_version,
    ENVIRONMENT: process.env.APP_ENV ?? "development",
  },
};

export default nextConfig;
