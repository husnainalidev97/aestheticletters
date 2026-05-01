import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aestheticletters.com" }],
        destination: "https://www.aestheticletters.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
