import { useQuery } from '@tanstack/react-query';

import { POST_QUERY_KEYS } from '../../../../utils/libs/tanstack/query-keys';

import { IPost } from '../../../../types/models';

import { useFetch } from '../../../useFetch';

export const useIndexPosts = () => {
	const { get } = useFetch<IPost[]>({ endpoint: '/posts' });

	return useQuery({
		queryKey: [ POST_QUERY_KEYS.index ],
		queryFn: () => get()
	});
};