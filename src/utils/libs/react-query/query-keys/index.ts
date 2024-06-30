
export const POSTS_QUERY_KEYS = {
	index: [ 'posts' ] as const,
	show: (id: string) => [ 'post', id ] as const,
	delete: (id: string) => [ 'post', id ] as const,
};