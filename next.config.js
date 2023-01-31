/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60000,
    domains: ["dev-river-strapi-assets.s3.ap-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
