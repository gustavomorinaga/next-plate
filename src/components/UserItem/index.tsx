import { LegacyRef } from 'react';
import NextLink from 'next/link';

// --- Chakra-UI ---
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Icons ---
import { FiGithub } from 'react-icons/fi';

interface UserItemProps {
	user: IUser;
	handleClosePopover: () => void;
	refPopover: LegacyRef<any>;
}

export default function UserItemComponent({
	user,
	handleClosePopover,
	refPopover,
}: UserItemProps): JSX.Element {
	const boxStyleProps: any = {
		w: 'full',
		display: 'flex',
		justifyContent: 'flex-start',
		cursor: 'pointer',
		padding: '2',
		_hover: {
			backgroundColor: useColorModeValue('gray.100', 'gray.600'),
		},
	};

	const loginStyleProps: any = {
		w: 'fit-content',
		display: 'flex',
		alignItems: 'center',
		gap: '1',
		color: useColorModeValue('gray.500', 'gray.300'),
	};

	return (
		<NextLink href={`/${user.login}`} passHref>
			<Box {...boxStyleProps} onClick={handleClosePopover} ref={refPopover}>
				<Flex gap="2" pr="2" overflow="hidden">
					<Avatar
						size="md"
						borderWidth="medium"
						borderColor="purple.300"
						src={user.avatar_url}
						name={user.name}
					/>

					<Flex direction="column" width="56" gap="1">
						<Text isTruncated lineHeight="normal">
							{user.name}
						</Text>
						<Text {...loginStyleProps}>
							<FiGithub />
							{user.login}
						</Text>
					</Flex>
				</Flex>
			</Box>
		</NextLink>
	);
}
