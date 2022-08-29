import NextDocument, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

// --- Partytown ---
import { Partytown } from '@builder.io/partytown/react';

// --- Chakra-UI ---
import { ColorModeScript } from '@chakra-ui/react';

// --- Styles ---
import theme from '@styles/theme';

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		return NextDocument.getInitialProps(ctx);
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/site.webmanifest" />
					<link
						href="/static/icons/icon-16x16.png"
						rel="icon"
						type="image/png"
						sizes="16x16"
					/>
					<link
						href="/static/icons/icon-32x32.png"
						rel="icon"
						type="image/png"
						sizes="32x32"
					/>
					<link rel="apple-touch-icon" href="/static/icons/icon-32x32.png" />
					<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<Partytown debug={true} forward={['dataLayer.push']} />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
