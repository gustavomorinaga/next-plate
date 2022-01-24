// --- Chakra-UI ---
import { HStack, IconButton, InputGroup, InputLeftElement } from '@chakra-ui/react';

// --- Motion Components ---
import { MotionBox } from '@components/Motion/MotionBox';

// --- Components ---
import InputGroupFieldComponent from '@components/InputGroupField';

// --- Form and Validations ---
import { Formik } from 'formik';
import * as Yup from 'yup';

// --- Icons ---
import { FiGithub, FiSearch } from 'react-icons/fi';

export default function SearchComponent({ handleSearchLogin }): JSX.Element {
	return (
		<MotionBox w="full">
			<Formik
				initialValues={{ login: '' }}
				validationSchema={Yup.object({
					login: Yup.string().required('Login is required!'),
				})}
				onSubmit={values => handleSearchLogin(values.login)}
			>
				{formik => (
					<form onSubmit={formik.handleSubmit}>
						<HStack spacing="2" w="full" alignItems="flex-start" py="2">
							<InputGroupFieldComponent
								type="text"
								name="login"
								placeholder="Search GitHub Profile..."
								helper="Insert a valid GitHub Profile to get the data"
								variant="outline"
								size="lg"
								icon={<FiGithub size="1.5rem" color="white" />}
								color="white"
								bg="gray.600"
								borderColor="gray.600"
								borderRadius="xl"
								focusBorderColor="purple.500"
								_hover={{ borderColor: 'purple.300' }}
							/>

							<IconButton
								icon={<FiSearch />}
								type="submit"
								aria-label="Search"
								isLoading={formik.isSubmitting}
								size="lg"
								borderRadius="xl"
								colorScheme="purple"
							/>
						</HStack>
					</form>
				)}
			</Formik>
		</MotionBox>
	);
}
