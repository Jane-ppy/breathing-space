/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/breathing-space' : '',
  assetPrefix: '/breathing-space/',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 