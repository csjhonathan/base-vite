import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { useDeletePosts } from '../../../../hooks/api/posts/useDeletePosts';

import { IPost } from '../../../../types/models';

import { Button } from '../../../atoms/button';

interface IPostCardProps {
	post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => { 
	const navigate = useNavigate();

	const { mutateAsync: deletePostMutation, isLoading: isDeletePostMutationLoading } = useDeletePosts(String(post.id));

	return (
		<div 
			className={
				classNames(
					'h-[150px]',
					'relative',
					'border border-gray-300 rounded-lg p-4',
					'transition-all duration-300',
					'hover:shadow-lg hover:border-gray-400'
				)
			}
		>
			<div className='flex flex-col gap-y-2'>
				<div>
					<p>Título:</p>
					{post?.title}
				</div>

				<div>
					<p>Views:</p>
					{post?.views}
				</div>
			</div>
			
			<div className={
				classNames(
					'absolute top-3 right-3',
					'flex flex-col gap-y-2'
				)
			}>
				<Button 
					onClick={() => navigate(`/posts/${ post.id }`)}
					className={
						classNames(
							'bg-blue-500 text-white',
							'transition-all duration-300',
							'hover:bg-blue-700'
						)
					}
				>
          Ver post
				</Button>
				<Button 
					onClick={() => deletePostMutation()}
					className={
						classNames(
							'bg-red-500 text-white',
							'transition-all duration-300',
							'hover:bg-red-700'
						)
					}
				>
					{isDeletePostMutationLoading ?
						'Apagando post'
						: 'Apagar post'
					}
				</Button>
			</div>
		</div>
	);
}; 

export default PostCard;