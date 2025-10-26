/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'avatar.vercel.sh' },
      { hostname: 'i.pravatar.cc' },
      { hostname: 'github.com' },
    ],
  },
};

module.exports = nextConfig;
