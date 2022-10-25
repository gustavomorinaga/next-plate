import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// --- Keys ---
import { createUseUserKey } from './keys';

// --- API ---
import { fetcher } from '@services/global/api';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

const MINUTES_TO_REFETCH_DATA = 5 * 60 * 1000; // 5 minutes

export const useUser = (login: string, options?: UseQueryOptions<IUser, AxiosError>) =>
	useQuery(
		createUseUserKey(login),
		() => fetcher<IUser>(`users/${login}`).then(({ data }) => data),
		{ ...options, refetchInterval: MINUTES_TO_REFETCH_DATA, retry: false }
	);
