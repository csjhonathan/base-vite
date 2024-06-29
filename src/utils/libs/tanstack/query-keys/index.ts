
export const POST_QUERY_KEYS = {
	index: [ 'posts' ] as const,
	show: (id: number) => [ 'post', id ] as const,
};

export const COMMENT_QUERY_KEYS = {
	index: [ 'comments' ] as const,
	show: (id: number) => [ 'comment', id ] as const,
};

export const PHOTO_QUERY_KEYS = {
	index: [ 'photos' ],
	show: (id: number) => [ 'photo', id ] as const,
};