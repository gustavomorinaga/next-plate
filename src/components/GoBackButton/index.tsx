import { useRouter } from 'next/router';
import { Url } from 'url';

// --- Chakra-UI ---
import { Button } from '@chakra-ui/react';

// --- Icons ---
import { FiArrowLeft } from 'react-icons/fi';

// --- Component Props Interface ---
interface IGoBackButtonProps {
	path?: Url['path'];
}

export default function GoBackButtonComponent({ path }: IGoBackButtonProps): JSX.Element {
	const router = useRouter();

	return (
		<Button
			colorScheme="purple"
			leftIcon={<FiArrowLeft size="1.5rem" />}
			position="absolute"
			top={[4, 10]}
			left={[4, 10]}
			zIndex="overlay"
			borderRadius="xl"
			boxShadow="xl"
			onClick={() => (path ? router.push(path) : router.back())}
		>
			Go Back
		</Button>
	);
}
