import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Hooks ---
import { useFetch } from '@hooks/useFetch';

// --- Motion Components ---
import { MotionContainer } from '@motionComponents/MotionContainer';

// --- Components ---
import UserComponent from '@components/User';

// -- Animations --
import { slide } from '@animations';

const UserPage: NextPage = () => {
	const { query } = useRouter();
	const { login } = query;

	const { data, error } = useFetch<IUser>(login ? `users/${login}` : null);

	return (
		<MotionContainer
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slide}
			style={{ height: '100%' }}
		>
			<NextSeo
				title={login && !error ? `👤 ${login}` : !error ? 'Loading...' : 'Erro!'}
				description="A short description goes here."
			/>

			<UserComponent user={data} error={error} />
		</MotionContainer>
	);
};

export default UserPage;
