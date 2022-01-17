import {
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

// --- Motion Components ---
import { MotionBox } from '@components/Motion/MotionBox';

// --- Icons ---
import { FiGithub, FiSearch } from 'react-icons/fi';

export default function SearchComponent({
	login,
	handleChangeLogin,
	handleSearchLogin,
	placeholder,
}): JSX.Element {
	return (
		<MotionBox w="full">
			<HStack spacing={2} w="full" p={2}>
				<InputGroup size="lg" variant="outline" borderColor="gray.600">
					<InputLeftElement
						pointerEvents="none"
						children={<FiGithub size="1.5rem" color="white" />}
					/>
					<Input
						type="text"
						name="login"
						id="login"
						color="white"
						bg="gray.600"
						focusBorderColor="purple.500"
						value={login}
						placeholder={placeholder}
						onChange={handleChangeLogin}
					/>
				</InputGroup>

				<IconButton
					aria-label="Search"
					icon={<FiSearch />}
					size="lg"
					colorScheme="purple"
					onClick={handleSearchLogin}
				/>
			</HStack>
		</MotionBox>
	);
}
