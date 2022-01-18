import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.github.com',
});

export const fetcher = async <Data = any>(url: string): Promise<Data> =>
	await api.get<Data>(url).then<Data>(res => res.data);
