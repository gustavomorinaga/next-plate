const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
	esModule: true,
	swcMinify: true,
	// images: {
	// 	formats: ['image/avif', 'image/webp'],
	// 	domains: ['avatars.githubusercontent.com'],
	// },
	// extends: [],
};

module.exports = withPlugins(
	[
		[
			withImages,
			{
				inlineImageLimit: false,
				exclude: path.resolve(__dirname, 'src/assets/svg'),
				webpack(config) {
					config.module.rules.push({
						test: /\.svg$/,
						use: ['@svgr/webpack'],
					});

					return config;
				},
			},
		],
		[
			withPWA,
			{
				pwa: {
					disable: !isProduction,
					dest: 'public',
					register: true,
					skipWaiting: true,
					runtimeCaching,
				},
			},
		],
	],
	nextConfig
);
