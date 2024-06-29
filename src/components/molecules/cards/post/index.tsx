import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { IPost } from '../../../../types/models';

import { Button } from '../../../atoms/button';

interface IPostCardProps {
	post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => { 
	const navigate = useNavigate();

	return (
		<div 
			className={
				classNames(
					'relative',
					'border border-gray-300 rounded-lg p-4',
					'transition-all duration-300',
					'hover:shadow-lg hover:border-gray-400'
				)
			}
		>
			<h2>{post.title}</h2>
			<p>{post.views}</p>

			<Button 
				onClick={() => navigate(`/posts/${ post.id }`)}
				className={
					classNames(
						'absolute top-3 right-3',
						'bg-blue-500 text-white',
						'transition-all duration-300',
						'hover:bg-blue-700'
					)
				}
			>
        Ver post
			</Button>
		</div>
	);
}; 

export default PostCard;