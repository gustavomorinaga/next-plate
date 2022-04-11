/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	type: 'website',
	titleTemplate: '%s | Next-Plate',
	defaultTitle: 'Next-Plate',
	description: '🦸‍♀️ A super template for Next.js with a pack of incredible tools',
	canonical: 'https://next-plate.vercel.app',
	site_name: 'Next-Plate',
	openGraph: {
		url: 'https://next-plate.vercel.app',
		title: 'Next-Plate',
		description: '🦸‍♀️ A super template for Next.js with a pack of incredible tools',
		images: [
			{
				url: 'https://next-plate.vercel.app/static/images/banner.jpg',
				width: 512,
				height: 256,
				alt: 'Next-Plate Banner Image',
			},
		],
		site_name: 'Next-Plate',
	},
};

export default defaultSEOConfig;
