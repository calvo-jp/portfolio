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
};

module.exports = config;
