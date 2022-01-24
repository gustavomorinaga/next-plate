import { Box, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import ThemeButtonComponent from '@components/ThemeButton';
import { FiExternalLink } from 'react-icons/fi';

export default function MainContentComponent({ children }): JSX.Element {
	const { colorMode } = useColorMode();

	const bgColor = useColorModeValue('gray.50', 'gray.900');

	const HERO_PATTERN = `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='${
		colorMode === 'light' ? '0.1' : '0.4'
	}' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E`;

	return (
		<Box bgColor={bgColor} bgImage={`url("${HERO_PATTERN}")`} overflow="hidden">
			<ThemeButtonComponent />
			{children}
			<Box
				w="full"
				display="grid"
				placeItems="center"
				position="absolute"
				zIndex="overlay"
				bottom="5"
				px="1.5"
			>
				<Link
					href="https://github.com/gmatthewsfeuer/next-plate"
					isExternal
					display="flex"
					alignItems="center"
					gap="2"
					bgColor={bgColor}
					py="2"
					px="4"
					borderRadius="xl"
					fontSize="sm"
					lineHeight="normal"
				>
					This is a template for Next.js. Check out the repo and create your own projects
					from this template
					<Text as={FiExternalLink} fontSize={{ base: '2.5rem', md: 'inherit' }} />
				</Link>
			</Box>
		</Box>
	);
}
