import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../../../../utils/libs/tanstack/query-keys';

import { IPost } from '../../../../types/models';

import { useFetch } from '../../../useFetch';

export const useIndexPosts = () => {
	const { get } = useFetch<IPost[]>({ endpoint: '/posts' });

	return useQuery({
		queryKey: [ QUERY_KEYS.INDEX_POSTS ],
		queryFn: () => get()
	});
};