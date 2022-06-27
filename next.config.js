/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: true,
  // experimental: {
  //   concurrentFeatures: false, // <- Turn this option to false
  //   serverComponents: true,
  // },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
