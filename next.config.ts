import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // important for static export
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true, // required for Firebase static hosting
  },
};

export default nextConfig;
