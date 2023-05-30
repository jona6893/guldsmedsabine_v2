/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "i.etsystatic.com",
      "www.datocms-assets.com",
    ],
  },
};
const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig
