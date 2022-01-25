import { useRouter } from 'next/router';

// --- Chakra-UI ---
import { Button } from '@chakra-ui/react';

// --- Icons ---
import { FiArrowLeft } from 'react-icons/fi';

export default function GoBackButtonComponent({ pageRedirection }): JSX.Element {
	const router = useRouter();

	return (
		<Button
			colorScheme="purple"
			leftIcon={<FiArrowLeft size="1.5rem" />}
			onClick={() => router.push(pageRedirection ?? '/')}
			position="absolute"
			top={[4, 10]}
			left={[4, 10]}
			zIndex="overlay"
			boxShadow="xl"
		>
			Go Back
		</Button>
	);
}
