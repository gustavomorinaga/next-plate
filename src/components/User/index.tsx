import { useRef } from 'react';
import { Avatar } from '@chakra-ui/react';

// --- Interfaces ---
import { IUser_Page } from '@interfaces/IUser';

// --- Motion Components ---
import { MotionBox } from '@motionComponents/MotionBox';

// --- Icons ---
import { FiBook, FiGithub, FiMapPin, FiUsers } from 'react-icons/fi';

// --- Animations ---
import zoom from '@animations/zoom';

export default function UserComponent({ user, error }: IUser_Page): JSX.Element {
	const constraintsRef = useRef(null);

	if (error)
		return (
			<div>
				<h1>Houve um erro!</h1>
			</div>
		);

	if (!user) return <div>Loading...</div>;

	return (
		<MotionBox ref={constraintsRef}>
			<MotionBox
				whileHover={zoom}
				drag
				dragConstraints={constraintsRef}
				dragElastic={0.5}
				whileDrag={{ opacity: 0.5 }}
			>
				<Avatar src={user.avatar_url} alt={user.name} />
				<div>
					<header>
						{user.name && <h1>{user.name}</h1>}
						<div>
							<a href={user.html_url} target="_blank" rel="noopener noreferrer">
								<FiGithub />
								{user.login}
							</a>
						</div>
					</header>
					<div>
						<div>
							<FiUsers />
							<span>
								<strong>{user.followers}</strong> followers
							</span>
							·
							<span>
								<strong>{user.following}</strong> following
							</span>
						</div>
						<span>
							<FiBook />
							<strong>{user.public_repos}</strong>
						</span>
						{user.location && (
							<span>
								<FiMapPin /> {user.location}
							</span>
						)}
					</div>
					{user.bio && <p>{user.bio}</p>}
				</div>
			</MotionBox>
		</MotionBox>
	);
}
