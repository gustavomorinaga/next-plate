import useSWR, { SWRConfiguration } from 'swr';

// --- Services ---
import { fetcher } from '@services/api';

const SECONDS = 30;

export function useFetch<Data = any, Error = any>(url: string, opts?: SWRConfiguration) {
	const { data, error, mutate } = useSWR<Data, Error>(
		url,
		async url => {
			const response = await fetcher(`${url}`);

			return response;
		},
		{
			...opts,
			refreshInterval: SECONDS * 1000,
		}
	);

	return { data, error, mutate };
}
