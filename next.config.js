/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/referral_radar',
  assetPrefix: '/referral_radar', // Remove trailing slash
  trailingSlash: true,
  webpack: (config) => {          // Add webpack config
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig