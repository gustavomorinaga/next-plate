const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
		config.resolve.alias = {
			...config.resolve?.alias,
			'@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
		};
		config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

		return config;
	},
};
