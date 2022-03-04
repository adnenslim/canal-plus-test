/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_MOCKING: "enabled",
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
