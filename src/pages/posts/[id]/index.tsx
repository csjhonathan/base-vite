import { useParams } from 'react-router-dom';

import { useShowPosts } from '../../../hooks/api/posts/useShowPosts';

const PostPage = () => {
	const { id } = useParams<'id'>();

	const { data: data_post, isLoading: isDataPostLoading } = useShowPosts(String(id));
	console.log('data_post :>> ', data_post);
	return(
		<div>
			{isDataPostLoading && 'Carregando...'}
			{!isDataPostLoading && (
				<div className='flex flex-col gap-y-2'>
					<div>
						<p>Título:</p>
						{data_post?.title}
					</div>

					<div>
						<p>Views:</p>
						{data_post?.views}
					</div>
				</div>
			)}
		</div>
	);
};

export default PostPage;