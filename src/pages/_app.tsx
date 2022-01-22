import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

// --- Chakra-UI ---
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';

// --- Analysis ---
import '@scripts/wdyr';

// --- Configs ---
import SEO from '../../next-seo.config';

// --- Components ---
import MainContentComponent from '@components/MainContent';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router: { route } }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme}>
				<MainContentComponent>
					<Component {...pageProps} key={route} />
				</MainContentComponent>
			</ChakraProvider>
		</>
	);
};

export default MyApp;
