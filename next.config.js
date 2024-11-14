/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['jakondak.github.io']  // Add this
  },
  basePath: '/referral_radar',
  assetPrefix: '/referral_radar',    // Remove trailing slash
  trailingSlash: true,
  webpack: (config) => {             // Add this webpack config
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    };
    return config;
  },
}

module.exports = nextConfig