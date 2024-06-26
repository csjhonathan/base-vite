import { useMutation } from 'react-query';

import { POSTS_QUERY_KEYS } from '../../../../utils/libs/react-query/query-keys';

import { ICreatePostFormValues } from '../../../../types/forms/posts';
import { IPost } from '../../../../types/models';

import { queryClient } from '../../../../App';
import { useFetch } from '../../../useFetch';

interface IPostCreate {
	title: string;
	content: string;
	views: number;
}

export const useCreatePosts = () => {
	const { post } = useFetch<IPost[], ICreatePostFormValues>({ endpoint: '/posts' });

	return useMutation({
		mutationFn: (body: IPostCreate) => post({ body }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [ POSTS_QUERY_KEYS.index ],
			});
		}
	});
};