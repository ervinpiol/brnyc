import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // brnyc.com = THE VAULT: no-index by design. Belt-and-suspenders with the
  // metadata robots tag in app/layout.tsx and public/robots.txt.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
