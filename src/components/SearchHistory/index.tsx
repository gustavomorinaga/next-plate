import { useRef } from 'react';
import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	StackDivider,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';

// --- Stores ---
import useUserStore from '@stores/user';

// --- Icons ---
import { FiClock } from 'react-icons/fi';

// --- Components ---
const UserItemComponent = dynamic(() => import('@components/UserItem'));

export default function SearchHistoryComponent({ styleProps }): JSX.Element {
	const users = useUserStore(({ users }) => users);

	const initRef = useRef();

	const emptyUsersStyleProps: any = {
		w: 'full',
		px: '3',
		py: '2',
		color: useColorModeValue('gray.500', 'gray.300'),
		bgColor: useColorModeValue('gray.100', 'gray.600'),
		align: 'center',
	};

	return (
		<Popover isLazy placement="bottom-start" offset={[56, 12]}>
			{({ isOpen, onClose }) => (
				<>
					<PopoverTrigger>
						<IconButton
							aria-label="View Search History"
							icon={<FiClock />}
							{...styleProps}
						/>
					</PopoverTrigger>

					<Portal>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />

							<PopoverHeader>Search History</PopoverHeader>
							<PopoverBody maxH="sm" overflow="overlay" padding="0">
								<VStack divider={<StackDivider />} spacing={0}>
									{!users.length && (
										<Text {...emptyUsersStyleProps}>It&apos;s empty here...</Text>
									)}

									{users.length &&
										users.map(user => (
											<UserItemComponent
												key={user.login}
												user={user}
												handleClosePopover={onClose}
												refPopover={initRef}
											/>
										))}
								</VStack>
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</>
			)}
		</Popover>
	);
}
