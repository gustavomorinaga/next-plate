import { Box, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

// --- Icons ---
import { FiExternalLink } from 'react-icons/fi';

export default function InfoLinkComponent({ bgColor }): JSX.Element {
	return (
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
			This is a template for Next.js. Check out the repo and create your own projects from
			this template
			<Text as={FiExternalLink} fontSize={{ base: '2.5rem', md: 'inherit' }} />
		</Link>
	);
}
