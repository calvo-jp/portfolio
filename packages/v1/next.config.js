// @ts-check

/** @type {import('next').NextConfig} */
const config = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
		],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		serverMinification: true,
	},
};

module.exports = config;