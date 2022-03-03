import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

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

const MINUTES_TO_REFETCH_DATA = 5 * 60 * 1000; // 5 minutes

export default function UserPage() {
	const { addUser } = useUserStore(state => state);

	const router = useRouter();
	const { login } = router.query;

	const constraintsRef = useRef(null);

	// --- Using React Query ---
	//
	const {
		data: user,
		isLoading,
		isError,
	} = useUser(login as string, {
		enabled: !!login,
		refetchInterval: MINUTES_TO_REFETCH_DATA,
		retry: false,
	});

	// --- Using SWR ---
	//
	// const { data: user, error } = useFetch<IUser>(login ? `users/${login}` : null, {
	// 	refreshInterval: 30,
	// });

	useEffect(() => {
		if (user) addUser(user);

		return () => {};
	}, [addUser, user]);

	const handleLogin = () => {
		if (user) return `👤 ${login} profile`;
		if (isLoading) return 'Loading...';
		if (isError) return 'Not Found!';

		// --- Using SWR ---
		//
		// return user && !error ? `👤 ${login} profile` : !error ? 'Loading...' : 'Not Found!';
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
							Profile not found! Search another profile!
						</Alert>
					)}

					{isLoading && <Spinner color="white" size="xl" />}

					{user && <UserComponent user={user} constraintsRef={constraintsRef} />}
				</MotionBox>
			</MotionBox>
		</>
	);
}
