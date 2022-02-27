import { LegacyRef } from 'react';
import NextLink from 'next/link';

// --- Chakra-UI ---
import {
	Avatar,
	Box,
	Flex,
	Grid,
	GridItem,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Icons ---
import { FiChevronRight, FiGithub } from 'react-icons/fi';

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
		transition: 'background-color 0.1s ease-in-out',
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
			<Box
				className="user__item"
				{...boxStyleProps}
				onClick={handleClosePopover}
				ref={refPopover}
				title={new Date(user.timestamp).toLocaleString()}
			>
				<Grid templateColumns="1fr 10fr auto" gap="2">
					<GridItem>
						<Avatar
							size="md"
							borderWidth="medium"
							borderColor="purple.300"
							src={user.avatar_url}
							name={user.name}
						/>
					</GridItem>

					<GridItem>
						<Flex direction="column" width="52" gap="1">
							{user.name && (
								<Text as="span" isTruncated lineHeight="normal">
									{user.name}
								</Text>
							)}
							<Text {...loginStyleProps}>
								<FiGithub />
								{user.login}
							</Text>
						</Flex>
					</GridItem>

					<GridItem
						display="flex"
						alignItems="center"
						justifyContent="center"
						visibility="hidden"
						transition="visibility 0.1s ease-in-out"
						sx={{
							'.user__item:hover &': {
								visibility: 'visible',
							},
						}}
					>
						<FiChevronRight />
					</GridItem>
				</Grid>
			</Box>
		</NextLink>
	);
}
