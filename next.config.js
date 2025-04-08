/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/breathing-space' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/breathing-space/' : '',
}

module.exports = nextConfig 