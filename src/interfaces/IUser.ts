export interface IUser {
	avatar_url: string;
	bio: string;
	followers: number;
	following: number;
	html_url: string;
	location: string;
	login: string;
	name: string;
	public_repos: number;
	url: string;
}

export interface IUser_Page {
	user: IUser;
	error: any;
}
