import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { QueryClient, QueryClientProvider } from 'react-query';

// --- Chakra-UI ---
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';

// --- Analysis (optional) ---
// import '@scripts/wdyr';

// --- Configs ---
import SEO from '../../next-seo.config';

// --- Components ---
import MainContentComponent from '@components/MainContent';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router: { route } }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<MainContentComponent>
						<Component {...pageProps} key={route} />
					</MainContentComponent>
				</ChakraProvider>
			</QueryClientProvider>
		</>
	);
};

export default MyApp;
