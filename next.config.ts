import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Robots-Tag", value: "index, follow" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://adservice.google.com https://www.clarity.ms https://scripts.clarity.ms",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com https://www.clarity.ms data:",
      "img-src 'self' data: https: blob: https://www.clarity.ms https://c.bing.com",
      "worker-src 'self' blob:",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://pagead2.googlesyndication.com https://fonts.googleapis.com https://fonts.gstatic.com https://www.clarity.ms https://*.clarity.ms",
      "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      {
        source: "/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
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
