/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "placeimg.com",
      "localhost",
      "dashboard.jawlattportal.com",
      "cronapp.jawlattportal.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.export = nextConfig;
