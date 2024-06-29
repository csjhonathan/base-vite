import { useParams } from 'react-router-dom';

import { useShowPosts } from '../../../hooks/api/posts/useShowPosts';

const PostPage = () => {
	const { id } = useParams<'id'>();

	const { data: data_post, isLoading: isDataPostLoading } = useShowPosts(Number(id));
  
	return(
		<div>
			{isDataPostLoading && 'Carregando...'}
			{!isDataPostLoading && data_post?.views}
		</div>
	);
};

export default PostPage;