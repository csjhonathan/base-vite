import { useQuery } from '@tanstack/react-query';

import { POST_QUERY_KEYS } from '../../../../utils/libs/tanstack/query-keys';

import { IPost } from '../../../../types/models';

import { useFetch } from '../../../useFetch';

export const useShowPosts = (post_id: number) => {
	const { get } = useFetch<IPost>({ endpoint: '/posts' });

	return useQuery({
		queryKey: [ POST_QUERY_KEYS.show(post_id) ],
		queryFn: () => get({ path_params: `${ post_id }` })
	});
};