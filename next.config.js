/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/breathing-space/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 