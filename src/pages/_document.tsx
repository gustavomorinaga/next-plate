import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#a78bfa" />
					<link rel="manifest" href="./site.webmanifest" />
					<link
						href="./assets/icons/icon-16x16.png"
						rel="icon"
						type="image/png"
						sizes="16x16"
					/>
					<link
						href="./assets/icons/icon-32x32.png"
						rel="icon"
						type="image/png"
						sizes="32x32"
					/>
					<link rel="apple-touch-icon" href="./assets/icons/icon-32x32.png"></link>
					<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
