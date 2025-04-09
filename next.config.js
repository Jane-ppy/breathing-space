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
}

module.exports = nextConfig 