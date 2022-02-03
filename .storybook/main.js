const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	/** Expose public folder to storybook as static */
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@chakra-ui/storybook-addon',
		'storybook-addon-next-router',
		'storybook-dark-mode',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	webpackFinal: config => {
		/**
		 * Add support for alias-imports
		 * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
		 */
		config.resolve.alias = {
			...config.resolve?.alias,
			'@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
		};

		/**
		 * Fixes font import with /
		 * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
		 */
		config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

		return config;
	},
};
