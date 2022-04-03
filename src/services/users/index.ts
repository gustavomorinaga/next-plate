import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

// --- Keys ---
import { createUseUserKey } from './keys';

// --- API ---
import { fetcher } from '@services/global/api';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

export const useUser = (login: string, options?: UseQueryOptions<IUser>) =>
	useQuery(
		createUseUserKey(login),
		() =>
			fetcher<IUser>(`users/${login}`)
				.then(({ data }) => data)
				.catch((error: AxiosError) => {
					if (error.response.status === 404)
						console.error('Something went wrong: User not found!');
				}),
		options
	);
