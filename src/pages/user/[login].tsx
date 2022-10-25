import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// --- Services ---
import { useUser } from '@services/users';

// --- Stores ---
import useUserStore from '@stores/user';

// --- Hooks ---
// import { useFetch } from '@hooks/useFetch';

// --- Chakra-UI---
import { Alert, AlertIcon, Spinner } from '@chakra-ui/react';

// --- Motion Components ---
import MotionBox from '@components/Motion/MotionBox';

// --- Components ---
const GoBackButtonComponent = dynamic(() => import('@components/GoBackButton'));
const UserComponent = dynamic(() => import('@components/User'));

// -- Animations --
import { slide } from '@animations';

export default function UserPage() {
	const { addUser } = useUserStore(state => state);

	const router = useRouter();
	const login = router.query?.login as string;

	const constraintsRef = useRef(null);

	// --- Using React Query ---
	//
	const {
		data: user,
		isLoading,
		isError,
		error,
	} = useUser(login, {
		enabled: !!login,
	});

	// --- Using SWR ---
	//
	// const { data: user, error } = useFetch<IUser>(login ? `users/${login}` : null, {
	// 	refreshInterval: 30,
	// });

	useEffect(() => {
		if (user) addUser(user);
	}, [addUser, user]);

	const handleLogin = () => {
		if (user) return `${login} profile`;
		if (isLoading) return 'Loading...';
		if (isError) return 'Not Found!';

		// --- Using SWR ---
		//
		// return user && !error ? `${login} profile` : !error ? 'Loading...' : 'Not Found!';
	};

	return (
		<>
			<NextSeo title={handleLogin()} description={handleLogin()} />

			<MotionBox
				w="full"
				h="100vh"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slide}
			>
				<GoBackButtonComponent path="/" />

				<MotionBox
					w="full"
					h="full"
					display="grid"
					placeItems="center"
					ref={constraintsRef}
				>
					{isError && (
						<Alert w="md" borderRadius="xl" status="error">
							<AlertIcon />
							{error.message}
						</Alert>
					)}

					{isLoading && <Spinner color="white" size="xl" />}

					{user && <UserComponent user={user} constraintsRef={constraintsRef} />}
				</MotionBox>
			</MotionBox>
		</>
	);
}
