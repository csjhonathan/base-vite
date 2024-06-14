/**
 * @description Types for useFetch hook
 * @file This file defines types for useFetch hook
 * @since 0.1.0
 */

/**
 * @type IUseFetchParams
 * @property {string} endpoint - The endpoint to make the request
 * @description The parameters for useFetch hook
 */
export interface IUseFetchParams {
	endpoint: string;
}

/**
 * @type IMakeRequestOptions
 * @property {string} method - The HTTP method to use
 * @property {B} body - The body of the request
 * @property {string} path_params - The path parameters of the request
 * @description The options for making a request
 */
export interface IMakeRequestOptions<B = unknown> {
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	body?: B;
	path_params?: string;
}

/**
 * @type IUseFetch
 * @property {(options?: IHttpUseFetchOptions)=> Promise<R>} get - The GET request function
 * @property {(options?: IHttpUseFetchOptions<B>)=> Promise<R>} post - The POST request function
 * @property {(options?: IHttpUseFetchOptions<B>)=> Promise<R>} patch - The PATCH request function
 * @property {(options?: IHttpUseFetchOptions)=> Promise<R>} destroy - The DELETE request function
 * @description The return type of useFetch hook
 */
export interface IUseFetch<R, B = unknown> {
	get: (options?: IHttpUseFetchOptions)=> Promise<R>;
	post: (options?: IHttpUseFetchOptions<B>)=> Promise<R>;
	patch: (options?: IHttpUseFetchOptions<B>)=> Promise<R>;
	destroy: (options?: IHttpUseFetchOptions)=> Promise<R>;
}

/**
 * @type IHttpUseFetchOptions
 * @property {B} body - The body of the request
 * @property {string} path_params - The path parameters of the request
 * @description The options for making a HTTP request
 */
export interface IHttpUseFetchOptions<B = unknown> {
	body?: B;
	path_params?: string;
}