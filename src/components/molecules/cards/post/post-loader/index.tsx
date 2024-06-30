import classNames from 'classnames';

import { Skeleton } from '../../../../atoms/skeleton';

const PostLoader = () => {
	return (
		<div
			className={
				classNames(
					'h-[150px]',
					'relative',
					'border border-gray-300 rounded-lg p-4',
					'transition-all duration-300',
				)
			}
		>
			<Skeleton className='w-[100px] h-[10px] rounded-full bg-gray-500 mb-4' />
			<Skeleton className='w-[50px] h-[5px] rounded-full bg-gray-500' />

			<div className={
				classNames(
					'absolute top-3 right-3',
					'flex flex-col gap-y-2'
				)
			}>
				<Skeleton className='w-[110px] h-[40px]  bg-gray-500'/>
				<Skeleton className='w-[110px] h-[40px]  bg-gray-500'/>
			</div>
		</div>
	);
};

export default PostLoader;