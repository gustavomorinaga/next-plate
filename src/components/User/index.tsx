import { useRef } from 'react';
import {
	Avatar,
	Center,
	Flex,
	Heading,
	HStack,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';

// --- Interfaces ---
import { IUser_Page } from '@interfaces/IUser';

// --- Motion Components ---
import { MotionBox } from '@motionComponents/MotionBox';

// --- Icons ---
import { FiBook, FiGithub, FiMapPin, FiUsers } from 'react-icons/fi';

// --- Animations ---
import zoom from '@animations/zoom';

export default function UserComponent({ user }: IUser_Page): JSX.Element {
	const constraintsRef = useRef(null);

	return (
		<MotionBox w="full" h="full" display="grid" placeItems="center" ref={constraintsRef}>
			<MotionBox
				maxW="2xl"
				p={2}
				bgColor="gray.600"
				borderWidth="thin"
				borderColor="gray.700"
				borderRadius="2xl"
				cursor="move"
				drag
				dragConstraints={constraintsRef}
				dragElastic={0.5}
				whileHover={zoom}
				whileDrag={{ opacity: 0.5 }}
			>
				<Stack direction={['column', 'row']} spacing={2}>
					<Center h="fit-content">
						<Avatar
							size="xl"
							borderWidth="medium"
							borderColor="purple.400"
							src={user.avatar_url}
							alt={user.name}
						/>
					</Center>
					<Stack>
						<Stack spacing={1}>
							{user.name && (
								<Heading size="lg" lineHeight="none" color="purple.400">
									{user.name}
								</Heading>
							)}
							<Link
								href={user.html_url}
								isExternal
								w="fit-content"
								display="flex"
								alignItems="center"
								gap={1}
								color="gray.300"
								_hover={{ color: 'white' }}
							>
								<FiGithub />
								{user.login}
							</Link>
						</Stack>
						<Stack direction={['column', 'row']}>
							<Flex color="white">
								<Center
									gap={1}
									bgColor="green.400"
									borderWidth="thin"
									borderColor="green.500"
									borderRadius="md"
									px={2}
								>
									<FiUsers />
									<HStack divider={<Text mx={1}>·</Text>}>
										<HStack>
											<Text fontSize="sm">
												<Text as="strong">{user.followers}</Text> followers
											</Text>
										</HStack>
										<HStack>
											<Text fontSize="sm">
												<Text as="strong">{user.following}</Text> following
											</Text>
										</HStack>
									</HStack>
								</Center>
							</Flex>
							<Flex color="white">
								<Center
									gap={1}
									bgColor="yellow.400"
									borderWidth="thin"
									borderColor="yellow.500"
									borderRadius="md"
									px={2}
								>
									<FiBook />
									<Text as="strong" fontSize="sm">
										{user.public_repos}
									</Text>
								</Center>
							</Flex>
							{user.location && (
								<Flex color="white">
									<Center
										gap={1}
										bgColor="blue.400"
										borderWidth="thin"
										borderColor="blue.500"
										borderRadius="md"
										px={2}
									>
										<FiMapPin />
										<Text fontSize="sm">{user.location}</Text>
									</Center>
								</Flex>
							)}
						</Stack>
						{user.bio && <Text color="white">{user.bio}</Text>}
					</Stack>
				</Stack>
			</MotionBox>
		</MotionBox>
	);
}
