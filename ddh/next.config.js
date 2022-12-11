/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
}

module.exports = nextConfig
