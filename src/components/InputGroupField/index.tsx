import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

// --- Form Validations ---
import { useField } from 'formik';

export default function InputGroupFieldComponent(props: any): JSX.Element {
	const [field, meta] = useField(props);

	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<InputGroup
				size={props.size}
				variant={props.variant}
				borderColor={props.borderColor}
			>
				<InputLeftElement pointerEvents="none" children={props.icon} />
				<Input {...field} {...props} />
			</InputGroup>
			{!meta.error ? (
				<FormHelperText>{props.helper}</FormHelperText>
			) : (
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			)}
		</FormControl>
	);
}
