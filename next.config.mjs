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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "youssefaltai-first-bucket.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
