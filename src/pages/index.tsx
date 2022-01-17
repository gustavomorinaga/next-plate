import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

// --- Chakra-UI ---
import { Center } from '@chakra-ui/react';

// --- Components ---
import SearchComponent from '@components/Search';

// --- Motion Components ---
import { MotionContainer } from '@components/Motion/MotionContainer';

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
			w="full"
			h="100vh"
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slide}
		>
			<NextSeo
				title="🔍 Search GitHub Profile..."
				description="A short description goes here."
			/>

			<Center w="full" h="full">
				<SearchComponent
					login={login}
					handleChangeLogin={handleChangeLogin}
					handleSearchLogin={handleSearchLogin}
					placeholder="Search GitHub Profile..."
				/>
			</Center>
		</MotionContainer>
	);
};

export default HomePage;
