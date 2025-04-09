import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/breathing-space',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/breathing-space/',
};

export default nextConfig;
