/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bb.sfgweb.co.za',
        pathname: '/wp-content/uploads/**', // Restrict to WordPress uploads
      },
    ],
  },
};

export default nextConfig;