import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

// --- Components ---
import SearchComponent from '@components/Search';

// --- Motion Components ---
import { MotionContainer } from '@motionComponents/MotionContainer';

// -- Animations --
import { slide } from '@animations';

const HomePage: NextPage = () => {
	const [login, setLogin] = useState('');

	const router = useRouter();

	const handleChangeLogin = ({ currentTarget }) => setLogin(currentTarget.value);

	const handleSearchLogin = (event: Event) => {
		event.preventDefault();
		login && router.push(`/${login.trim()}`, undefined, { shallow: true });
	};

	return (
		<MotionContainer
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slide}
			style={{ height: '100%' }}
		>
			<NextSeo
				title="🔍 Search GitHub Profile..."
				description="A short description goes here."
			/>

			<SearchComponent
				login={login}
				handleChangeLogin={handleChangeLogin}
				handleSearchLogin={handleSearchLogin}
				placeholder="Search GitHub Profile..."
			/>
		</MotionContainer>
	);
};

export default HomePage;
