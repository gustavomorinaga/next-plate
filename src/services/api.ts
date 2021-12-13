import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.API_BASE_URL,
});

export const fetcher = async <Data = any>(url: string): Promise<Data> =>
	await api.get<Data>(url).then<Data>(res => res.data);
