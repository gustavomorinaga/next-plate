import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import '@scripts/wdyr';

// --- Configs ---
import SEO from '../../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router: { route } }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider>
				<Component {...pageProps} key={route} />
			</ChakraProvider>
		</>
	);
};

export default MyApp;
