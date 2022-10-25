import { QueryKey } from '@tanstack/react-query';

export const createUseUserKey = (login: string): QueryKey => ['useUser', login];
