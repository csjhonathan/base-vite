
import { useMutation } from 'react-query';

import { POSTS_QUERY_KEYS } from '../../../../utils/libs/react-query/query-keys';

import { IPost } from '../../../../types/models';

import { queryClient } from '../../../../App';
import { useFetch } from '../../../useFetch';

export const useDeletePosts = (post_id: string) => {
	const { destroy } = useFetch<IPost>({ endpoint: '/posts' });

	return useMutation({
		mutationFn: () => destroy({ path_params: `${ post_id }` }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [ POSTS_QUERY_KEYS.index ],
			});
		}
	});
};