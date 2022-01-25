// --- Chakra-UI ---
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

// --- Icons ---
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeButtonComponent(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();

	const color = useColorModeValue('gray.50', 'gray.600');
	const bgColor = useColorModeValue('gray.600', 'gray.50');
	const bgColorHover = useColorModeValue('gray.700', 'gray.200');

	return (
		<IconButton
			aria-label="Change Theme Mode"
			icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
			color={color}
			bgColor={bgColor}
			position="absolute"
			top={[4, 10]}
			right={[4, 10]}
			zIndex="overlay"
			boxShadow="xl"
			_hover={{ backgroundColor: bgColorHover }}
			onClick={toggleColorMode}
		/>
	);
}
