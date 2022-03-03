// import useSWR, { SWRConfiguration } from 'swr';

// // --- Services ---
// import { fetcher } from '@services/global/api';

// export function useFetch<Data = any, Error = any>(url: string, opts?: SWRConfiguration) {
// 	const refreshInterval = opts?.refreshInterval
// 		? +opts.refreshInterval * 1000
// 		: undefined;

// 	const { data, error, mutate } = useSWR<Data, Error>(
// 		url,
// 		async url => await fetcher(`${url}`),
// 		{ ...opts, refreshInterval }
// 	);

// 	return { data, error, mutate };
// }

/**
 * * Just to prevent errors. To enable useFetch,
 * * uncomment above and delete line code below.
 */
export {};
