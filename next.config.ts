import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "portfolio-seven-drab-63.vercel.app",
          },
        ],
        destination: "https://www.sandjar.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
