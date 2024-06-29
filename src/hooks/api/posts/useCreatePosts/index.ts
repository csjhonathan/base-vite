import { useMutation } from '@tanstack/react-query';

import { POST_QUERY_KEYS } from '../../../../utils/libs/tanstack/query-keys';

import { ICreatePostFormValues } from '../../../../types/forms/posts';
import { IPost } from '../../../../types/models';

import { queryClient } from '../../../../App';
import { useFetch } from '../../../useFetch';

export const useCreatePosts = () => {
	const { post } = useFetch<IPost[], ICreatePostFormValues>({ endpoint: '/posts' });

	return useMutation({
		mutationFn: () => post(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [ POST_QUERY_KEYS.index ],
			});
		}
	});
};