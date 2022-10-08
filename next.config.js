const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = async _phase => {
	/** @type {import('next').NextConfig} */
	const nextConfig = {
		reactStrictMode: true,
		swcMinify: true,
		// extends: [],
		// images: {
		// 	formats: ['image/avif', 'image/webp'],
		// 	domains: ['avatars.githubusercontent.com'],
		// },
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

	return withPlugins(
		[
			[
				withImages({
					webpack(config) {
						config.module.rules.push({
							test: /\.svg$/,
							use: ['@svgr/webpack'],
						});

						return config;
					},
				}),
			],
			[
				withPWA({
					dest: 'public',
					register: true,
					skipWaiting: true,
					runtimeCaching,
					buildExcludes: [/middleware-manifest.json$/],
					disable: !isProduction,
				}),
			],
		],
		nextConfig
	)(_phase, { defaultConfig: {} });
};
