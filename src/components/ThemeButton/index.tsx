// --- Chakra-UI ---
import {
	ComponentDefaultProps,
	ComponentWithAs,
	IconButton,
	IconButtonProps,
	useColorMode,
} from '@chakra-ui/react';

// --- Icons ---
import { FiMoon, FiSun } from 'react-icons/fi';

// --- Component Props Interface ---
interface IThemeButtonProps {
	styleProps: ComponentDefaultProps | ComponentWithAs<'button', IconButtonProps>;
}

export default function ThemeButtonComponent({
	styleProps,
}: IThemeButtonProps): JSX.Element {
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
