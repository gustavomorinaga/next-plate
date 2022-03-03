import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	Avatar,
	Badge,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	Link,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';

// --- Motion Components ---
const MotionBox = dynamic(() => import('@components/Motion/MotionBox'));

// --- Icons ---
import { FiBook, FiGithub, FiMapPin, FiUsers } from 'react-icons/fi';

// --- Animations ---
import zoom from '@animations/zoom';

export default function UserComponent({ user, constraintsRef }): JSX.Element {
	return (
		<MotionBox
			maxW="2xl"
			p="4"
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
			<Stack direction={['column', 'row']} spacing="4">
				<Center h="fit-content" marginTop={[-14, 0]}>
					<Avatar
						size="xl"
						borderWidth="medium"
						borderColor="purple.300"
						src={user.avatar_url}
						name={user.name}
						ignoreFallback
					/>
				</Center>
				<Stack>
					<Stack spacing="1">
						{user.name && (
							<Heading
								size="lg"
								lineHeight="none"
								color="purple.300"
								textAlign={{ base: 'center', sm: 'left' }}
							>
								{user.name}
							</Heading>
						)}
						<Link
							href={user.html_url}
							isExternal
							w={{ base: 'full', md: 'fit-content' }}
							display="flex"
							alignItems="center"
							gap="1"
							justifyContent={{ base: 'center', sm: 'left' }}
							color="gray.300"
							_hover={{ color: 'white' }}
						>
							<FiGithub />
							{user.login}
						</Link>
					</Stack>
					<Wrap justify={{ base: 'center', sm: 'left' }}>
						<WrapItem>
							<Badge
								variant="solid"
								colorScheme="green"
								display="flex"
								alignItems="center"
								gap="1"
								borderRadius="md"
							>
								<FiUsers />
								<HStack divider={<Text mx="1">·</Text>}>
									<HStack>
										<Text fontSize="sm">
											<Text as="strong">{user.followers}</Text>
											<Text as="span" textTransform="none" fontWeight="normal" ml="1">
												followers
											</Text>
										</Text>
									</HStack>
									<HStack>
										<Text fontSize="sm">
											<Text as="strong">{user.following}</Text>
											<Text as="span" textTransform="none" fontWeight="normal" ml="1">
												following
											</Text>
										</Text>
									</HStack>
								</HStack>
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge
								variant="solid"
								colorScheme="yellow"
								display="flex"
								alignItems="center"
								gap="1"
								borderRadius="md"
							>
								<FiBook />
								<Text as="strong" fontSize="sm">
									{user.public_repos}
								</Text>
							</Badge>
						</WrapItem>
						{user.location && (
							<WrapItem>
								<Badge
									variant="solid"
									colorScheme="blue"
									display="flex"
									alignItems="center"
									gap="1"
									borderRadius="md"
								>
									<FiMapPin />
									<Text fontSize="sm" textTransform="none" fontWeight="normal">
										{user.location}
									</Text>
								</Badge>
							</WrapItem>
						)}
					</Wrap>

					{user.bio && (
						<>
							<Divider orientation="horizontal" />
							<Text color="white">{user.bio}</Text>
						</>
					)}
				</Stack>
			</Stack>
		</MotionBox>
	);
}
