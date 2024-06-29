import { useIndexPosts } from '../../hooks/api/posts/useIndexPosts';

import PostCard from '../../components/molecules/cards/post';

const PostsPage = () => {
	const { data: data_posts, isLoading: isDataPostsLoading } = useIndexPosts();
	
	return (
		<div>

			{isDataPostsLoading && (
				<p>
          Carregando...
				</p>
			)}

			{!isDataPostsLoading && (
				<ul className='row'>
					{data_posts?.map((post) => (
						<li 
							key={post.id}
							className='col-4'
						>
							<PostCard post={post}/>
						</li>
					))}
				</ul>
			)}
			
		</div>
	);
};

export default PostsPage;