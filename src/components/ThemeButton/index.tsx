// --- Chakra-UI ---
import { IconButton, useColorMode } from '@chakra-ui/react';

// --- Icons ---
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeButtonComponent({ styleProps }): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Change Theme Mode"
			icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
			{...styleProps}
			onClick={toggleColorMode}
		/>
	);
}
