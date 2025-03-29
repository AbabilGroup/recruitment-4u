/** @type {import('next').NextConfig} */
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  
  output: "standalone",
  images: {
    domains: ["localhost", "images.unsplash.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// /** @type {import('next').NextConfig} */
// import { loadEnvConfig } from "@next/env";
// const projectDir = process.cwd();
// loadEnvConfig(projectDir); // L
// const nextConfig = {
//   output: "standalone",
//   images: {
//     domains: ["localhost", "images.unsplash.com"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
