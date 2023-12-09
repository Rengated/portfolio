/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: "export",
};
const withVideos = require("next-videos");
module.exports = withVideos(nextConfig);
