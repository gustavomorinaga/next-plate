const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	esModule: true,
	// swcMinify: true,
	// images: {
	// 	formats: ['image/avif', 'image/webp'],
	// 	domains: ['avatars.githubusercontent.com'],
	// },
	// extends: [],
	rewrites() {
		const notakuDocsUrlWithBasePath = new URL(
			`https://1164a4c6-b7b3-4bc3.docs-base-path.notaku.site/docs`
		).origin;
		return [
			{
				source: '/docs',
				destination: `${notakuDocsUrlWithBasePath}/docs`,
			},
			{
				source: '/docs/:path*',
				destination: `${notakuDocsUrlWithBasePath}/docs/:path*`,
			},
		];
	},
};

module.exports = withPlugins(
	[
		[
			withImages,
			{
				inlineImageLimit: false,
				exclude: path.resolve(__dirname, 'public/static/svg'),
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

					// Prevent Bad Pre-Caching Error:
					// buildExcludes: [/middleware-manifest\.json$/],
				},
			},
		],
	],
	nextConfig
);
