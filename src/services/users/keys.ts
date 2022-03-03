import { QueryKey } from 'react-query';

export const createUseUserKey = (login: string): QueryKey => ['useUser', login];
