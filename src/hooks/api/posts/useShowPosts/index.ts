import { useQuery } from 'react-query';

import { POSTS_QUERY_KEYS } from '../../../../utils/libs/react-query/query-keys';

import { IPost } from '../../../../types/models';

import { useFetch } from '../../../useFetch';

export const useShowPosts = (post_id: string) => {
	const { get } = useFetch<IPost>({ endpoint: '/posts' });

	return useQuery({
		queryKey: [ POSTS_QUERY_KEYS.show(post_id) ],
		queryFn: () => get({ path_params: `${ post_id }` })
	});
};