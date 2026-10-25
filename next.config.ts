import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Malformed inbound links seen in GA4 (other sites / AI answers append markup
      // like `:><b>California` or `**` to the URL). Send them to the real page.
      {
        source: '/locations/:slug(california[^a-z0-9/-].*)',
        destination: '/locations/california',
        permanent: true,
      },
      {
        source: '/resources/local-ordinances/:slug(oakland[^a-z0-9/-].*)',
        destination: '/resources/local-ordinances/oakland',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
