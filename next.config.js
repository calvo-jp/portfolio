/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = config;
