/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: 'referral_radar',
  assetPrefix: 'referral_radar/',  // Add this line
  trailingSlash: true,              // Add this line
}

module.exports = nextConfig