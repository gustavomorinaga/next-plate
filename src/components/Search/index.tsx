// --- Motion Components ---
import { MotionBox } from '@motionComponents/MotionBox';

// --- Icons ---
import { FiGithub, FiSearch } from 'react-icons/fi';

export default function SearchComponent({
	login,
	handleChangeLogin,
	handleSearchLogin,
	placeholder,
}): JSX.Element {
	return (
		<MotionBox>
			<form>
				<label>
					<FiGithub />
					<input
						type="text"
						name="login"
						id="login"
						value={login}
						placeholder={placeholder}
						onChange={handleChangeLogin}
					/>
				</label>
				<button onClick={handleSearchLogin} aria-label="Search">
					<FiSearch />
				</button>
			</form>
		</MotionBox>
	);
}
