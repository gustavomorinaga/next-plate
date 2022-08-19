import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

// --- Motion Components ---
const MotionBox = dynamic(() => import('@components/Motion/MotionBox'));

// --- Form and Validations ---
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Icons ---
import { FiGithub, FiSearch } from 'react-icons/fi';

// --- Validation Schema and Type ---
const validationSchema = Yup.object().shape({
	login: Yup.string().required('Login is required!'),
});

type FormType = Yup.InferType<typeof validationSchema>;

// --- Component Props Interface ---
interface ISearchProps {
	handleSearchLogin: (login?: string) => void;
}

export default function SearchComponent({
	handleSearchLogin,
}: ISearchProps): JSX.Element {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const onSubmit = ({ login }: FormType) =>
		new Promise(() => setTimeout(() => handleSearchLogin(login), 500));

	return (
		<MotionBox w="full">
			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack spacing="2" w="full" alignItems="flex-start" py="2">
					<FormControl isInvalid={!!errors.login}>
						<InputGroup size="lg" variant="outline" borderColor="gray.600">
							<InputLeftElement
								pointerEvents="none"
								children={<FiGithub size="1.5rem" color="white" />}
							/>
							<Input
								{...register('login')}
								type="text"
								placeholder="Search GitHub Profile..."
								color="whitesmoke"
								bg="gray.600"
								borderColor="gray.600"
								borderRadius="xl"
								focusBorderColor="purple.500"
								_placeholder={{ color: 'gray.400' }}
								_hover={{ borderColor: 'purple.300' }}
							/>
						</InputGroup>
						{!errors.login ? (
							<FormHelperText>
								Insert a valid GitHub Profile to get the data
							</FormHelperText>
						) : (
							<FormErrorMessage>{errors.login?.message as string}</FormErrorMessage>
						)}
					</FormControl>

					<IconButton
						icon={<FiSearch />}
						type="submit"
						aria-label="Search"
						isLoading={isSubmitting}
						size="lg"
						borderRadius="xl"
						colorScheme="purple"
					/>
				</HStack>
			</form>
		</MotionBox>
	);
}
