// @ts-check

/** @type {import('next').NextConfig} */
module.exports = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		serverMinification: true,
		optimizePackageImports: ['@untitled-theme/icons-react'],
	},
};
