import { Fragment } from 'react/jsx-runtime';

import { useIndexPosts } from '../../hooks/api/posts/useIndexPosts';

const PostsPage = () => {
	const { data: data_posts } = useIndexPosts();

	return (
		<div>
			{data_posts?.map((post) => (
				<Fragment key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.views}</p>
				</Fragment>
			))}
		</div>
	);
};

export default PostsPage;