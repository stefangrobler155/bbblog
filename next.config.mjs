/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'bbblog.local',
        pathname: '/wp-content/uploads/**', // Restrict to WordPress uploads
      },
    ],
  },
};

export default nextConfig;