import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cfcdn.beatsaver.com/**")],
  },
};

export default nextConfig;
