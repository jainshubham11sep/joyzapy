/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  crossOrigin: 'anonymous',
  images: {
    domains: ['www.joyzapy.com'],
  },
};

export default nextConfig;