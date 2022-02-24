// --- Chakra-UI ---
import { Box, Link, Text } from '@chakra-ui/react';

// --- Icons ---
import { FiExternalLink } from 'react-icons/fi';

export default function InfoLinkComponent({ bgColor }): JSX.Element {
	return (
		<Box
			w="full"
			display="grid"
			placeItems="center"
			position="absolute"
			zIndex="overlay"
			bottom="4"
			px="4"
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
				<Text
					as={FiExternalLink}
					fontSize={{ base: '2.5rem', sm: '1.5rem', md: 'inherit' }}
				/>
			</Link>
		</Box>
	);
}
