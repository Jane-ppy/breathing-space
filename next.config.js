/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/breathing-space',
  assetPrefix: '/breathing-space/',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 