import React from 'react';
import * as NextImage from 'next/image';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '../theme';

import { addDecorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Fixing Next Image problem
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: props => <OriginalNextImage {...props} unoptimized />,
});

// Enabling Chakra-UI on Storybook
addDecorator(storyFn => (
	<ChakraProvider theme={theme}>
		<CSSReset />
		{storyFn()}
	</ChakraProvider>
));

// Default configuration
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
		'storybook/docs/panel': { index: -1 },
	},
};

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
