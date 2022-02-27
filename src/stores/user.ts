import create from 'zustand';

// --- Models ---
import { IUser } from '@interfaces/IUser';

interface State {
	users: IUser[];

	addUser: (user: IUser) => void;
	getUser: (login: string) => IUser;
	getUserIndex: (login: string) => number;
	removeUser: (login: string) => void;
}

const useUserStore = create<State>((set, get) => ({
	users: [],

	addUser: (user: IUser) => {
		const userExists = !!get().getUser(user.login);
		if (userExists) get().removeUser(user.login);

		user.timestamp = Date.now();
		set(state => ({ users: [user, ...state.users] }));
	},
	getUser: (login: string) => {
		const users = get().users;
		const user = users.find(user => user.login === login);

		return user;
	},
	getUserIndex: (login: string) => {
		const users = get().users;
		const userIndex = users.findIndex(user => user.login === login);

		return userIndex;
	},
	removeUser: (login: string) => {
		const userIndex = get().getUserIndex(login);

		const users = get().users;
		users.splice(userIndex, 1);

		set(() => ({ users: [...users] }));
	},
}));

export default useUserStore;
