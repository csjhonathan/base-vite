export interface IUseFetchParams {
	endpoint: string;
}

export interface IMakeRequestOptions<B = unknown> {
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	body?: B;
}

export interface IUseFetch<R, B = unknown> {
	get: ()=> Promise<R>;
	post: (body: B)=> Promise<R>;
	patch: (body: B)=> Promise<R>;
	destroy: ()=> Promise<R>;
}