import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

// --- Chakra-UI ---
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';

// --- Analysis ---
import '@scripts/wdyr';

// --- Configs ---
import SEO from '../../next-seo.config';

const HERO_PATTERN =
	"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E";

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router: { route } }) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme}>
				<Box bgColor="gray.900" bgImage={`url("${HERO_PATTERN}")`} overflow="hidden">
					<Component {...pageProps} key={route} />
				</Box>
			</ChakraProvider>
		</>
	);
};

export default MyApp;
