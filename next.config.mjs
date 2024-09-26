/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/web",
        permanent: true,
      },
      {
        source: "/services/:service",
        destination: "/services/:service/overview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
