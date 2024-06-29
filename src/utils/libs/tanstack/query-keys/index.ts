import { type IQueryKeys } from '../../../../types/libs/tanstack/query-keys';

export const POST_QUERY_KEYS: IQueryKeys = {
	index: [ 'posts' ],
	show: (id: number) => [ 'post', id ],
};

export const COMMENT_QUERY_KEYS: IQueryKeys = {
	index: [ 'comments' ],
	show: (id: number) => [ 'comment', id ],
};

export const PHOTO_QUERY_KEYS: IQueryKeys = {
	index: [ 'photos' ],
	show: (id: number) => [ 'photo', id ],
};