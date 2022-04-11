import { useRef } from 'react';
import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	ComponentDefaultProps,
	ComponentWithAs,
	IconButton,
	IconButtonProps,
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

// --- Component Props Interface ---
interface ISearchHistoryProps {
	styleProps: ComponentDefaultProps | ComponentWithAs<'button', IconButtonProps>;
}

export default function SearchHistoryComponent({
	styleProps,
}: ISearchHistoryProps): JSX.Element {
	const users = useUserStore(state => state.users);

	const initRef = useRef();

	const emptyUsersListText = {
		color: useColorModeValue('gray.500', 'gray.300'),
		bgColor: useColorModeValue('gray.100', 'gray.600'),
	};

	return (
		<Popover isLazy placement="bottom-start" offset={[56, 12]}>
			{({ onClose }) => (
				<>
					<PopoverTrigger>
						<IconButton
							aria-label="View Search History"
							icon={<FiClock />}
							{...styleProps}
						/>
					</PopoverTrigger>

					<Portal>
						<PopoverContent borderRadius="xl" overflow="hidden">
							<PopoverArrow />
							<PopoverCloseButton />

							<PopoverHeader>Search History</PopoverHeader>
							<PopoverBody maxH="sm" overflow="overlay" padding="0">
								<VStack divider={<StackDivider />} spacing="unset">
									{!users.length && (
										<Text w="full" px="3" py="2" align="center" {...emptyUsersListText}>
											It&apos;s empty here...
										</Text>
									)}

									{users.length &&
										users.map(user => (
											<UserItemComponent
												key={`${user.login}_${user.timestamp}`}
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
