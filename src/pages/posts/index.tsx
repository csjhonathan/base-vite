import { useCreatePosts } from '../../hooks/api/posts/useCreatePosts';
import { useIndexPosts } from '../../hooks/api/posts/useIndexPosts';

import { Button } from '../../components/atoms/button';
import PostCard from '../../components/molecules/cards/post';
import PostLoader from '../../components/molecules/cards/post/post-loader';

const PostsPage = () => {
	const { data: data_posts, isLoading: isDataPostsLoading } = useIndexPosts();
	const { mutateAsync: createPostMutation, isLoading } = useCreatePosts();
	console.log(isLoading);
	return (
		<div>
			{!isDataPostsLoading && (
				<Button
					className='mb-4'
					onClick={() => {
						createPostMutation({
							title: 'Titulo',
							content: 'Conteudo',
							views: 100
						});
					}}
				>
          criar post
				</Button>
			)}

			{(isDataPostsLoading || isLoading) && (
				<ul className='row gap-y-4'>
					{new Array(10).fill(0).map((_, index) => (
						<li 
							key={index}
							className='col-4'
						>
							<PostLoader/>
						</li>
					))}
				</ul>
			)}

			{(!isDataPostsLoading && !isLoading) && (
				<ul className='row gap-y-6'>
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