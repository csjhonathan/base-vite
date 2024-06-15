import { lazy } from 'react';

import { IPath } from '../../../types/paths';

export const DefaultPaths: IPath[] = [
	{
		id: 'home',
		display: 'Início',
		path: '/',
		element: lazy(() => import('../../../pages/home')),
		template: lazy(() => import('../../../components/templates/default')),
	}
];