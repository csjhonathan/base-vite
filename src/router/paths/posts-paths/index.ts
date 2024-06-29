import { lazy } from 'react';

import { IPath } from '../../../types/paths';

export const PostsPaths: IPath[] = [
	{
		id: 'posts',
		display: 'Posts',
		path: '/posts',
		element: lazy(() => import('../../../pages/posts')),
		template: lazy(() => import('../../../components/templates/default')),
		isMainPath: true,
	},
	{
		id: 'posts-id',
		display: 'Post',
		path: '/posts/:id',
		element: lazy(() => import('../../../pages/posts/[id]')),
		template: lazy(() => import('../../../components/templates/blank')),
	}
];