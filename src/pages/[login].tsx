import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Hooks ---
import { useFetch } from '@hooks/useFetch';

// --- Chakra-UI---
import { Alert, AlertIcon, Button, Center, Spinner } from '@chakra-ui/react';

// --- Motion Components ---
import { MotionBox } from '@components/Motion/MotionBox';

// --- Components ---
import UserComponent from '@components/User';

// --- Icons ---
import { FiArrowLeft } from 'react-icons/fi';

// -- Animations --
import { slide } from '@animations';

const UserPage: NextPage = () => {
	const router = useRouter();
	const { login } = router.query;

	const { data, error } = useFetch<IUser>(login ? `users/${login}` : null);

	return (
		<>
			<NextSeo
				title={login && !error ? `👤 ${login}` : !error ? 'Loading...' : 'Not Found!'}
				description="A short description goes here."
			/>

			<MotionBox
				w="full"
				h="100vh"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slide}
			>
				<Button
					colorScheme="purple"
					leftIcon={<FiArrowLeft size="1.5rem" />}
					onClick={() => router.push('/')}
					position="absolute"
					top={[4, 10]}
					left={[4, 10]}
					zIndex="overlay"
					boxShadow="xl"
				>
					Go Back
				</Button>

				{(!data || error) && (
					<Center w="full" h="full">
						{error && (
							<Alert w="md" borderRadius="xl" status="error">
								<AlertIcon />
								Profile not found! Search another profile!
							</Alert>
						)}

						{!data && !error && <Spinner color="white" size="xl" />}
					</Center>
				)}

				{data && <UserComponent user={data} />}
			</MotionBox>
		</>
	);
};

export default UserPage;
