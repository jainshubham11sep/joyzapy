/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  crossOrigin: 'anonymous',
  images: {
    domains: ['www.punogames.com'],
  },
};

export default nextConfig;