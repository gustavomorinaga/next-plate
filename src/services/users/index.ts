import { useQuery, UseQueryOptions } from 'react-query';

// --- Keys ---
import { createUseUserKey } from './keys';

// --- API ---
import { fetcher } from '@services/global/api';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

export const useUser = (login: string, options?: UseQueryOptions<IUser>) =>
	useQuery(createUseUserKey(login), () => fetcher(`users/${login}`), options);
