import create from 'zustand';

// --- Models ---
import { IUser } from '@interfaces/IUser';

interface State {
	users: IUser[];

	addUser: (user: IUser) => void;
	userExists: (login: string) => boolean;
}

const useUserStore = create<State>((set, get) => ({
	users: [],

	addUser: (user: IUser) => {
		set(state => ({ users: [...state.users, user] }));
	},
	userExists: (login: string) => {
		const users = get().users;
		const userExists = users.find(user => user.login === login);
		return !!userExists;
	},
}));

export default useUserStore;
