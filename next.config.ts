import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/get-airport",
        destination: "https://flyez.ai/get-airport",
      },
      {
        source: "/travel-gpt",
        destination: "https://flyez.ai/travel-gpt",
      },
      {
        source: "/popular-routes",
        destination: "https://flyez.ai/popular-routes",
      },
    ];
  },
};

export default nextConfig;
