import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN devices to open the dev server (e.g. phone testing)
  allowedDevOrigins: ["192.168.20.89"],
  // Cloudflare Pages (free): static export -> `out/` directory
  output: "export",
  images: {
    // No Next image server on Pages static hosting
    unoptimized: true,
  },
};

export default nextConfig;
