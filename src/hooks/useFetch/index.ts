import { IUseFetchParams, IUseFetch, IMakeRequestOptions, IHttpUseFetchOptions } from '../../types/hooks/useFetch';

import { useAxiosInstance } from '../useAxiosInstance';

export const useFetch = <R>(params: IUseFetchParams): IUseFetch<R> => {
	const { endpoint } = params;

	const axiosInstance = useAxiosInstance();

	const makeRequest = async<R>(options: IMakeRequestOptions) => {
		const { method, body, path_params } = options;

		let url = endpoint;

		if (path_params) {
			url = `${ endpoint }/${ path_params }`;
		}

		switch (method) {
			case 'GET':
				return axiosInstance.get<R>(url);
			case 'POST':
				return axiosInstance.post<R>(url, body);
			case 'PATCH':
				return axiosInstance.patch<R>(url, body);
			case 'DELETE':
				return axiosInstance.delete<R>(url);
			default:
				throw new Error('Invalid method');
		}
	};

	const get = async<R>(options?: IHttpUseFetchOptions) => {
		const {
			path_params
		} = options || {};

		try {
			const { data } = await makeRequest<R>({ method: 'GET', path_params });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const post = async<R, B>(options?: IHttpUseFetchOptions<B>) => {
		const {
			body,
			path_params
		} = options || {};

		try {
			const { data } = await makeRequest<R>({ method: 'POST', body, path_params });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const patch = async<R, B>(options?: IHttpUseFetchOptions<B>) => {
		const {
			body,
			path_params
		} = options || {};

		try {
			const { data } = await makeRequest<R>({ method: 'PATCH', body, path_params });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const destroy = async<R>(options?: IHttpUseFetchOptions) => {
		const {
			path_params
		} = options || {};

		try {
			const { data } = await makeRequest<R>({ method: 'DELETE', path_params });
			return data;
		} catch (error) {
			throw error;
		}
	};

	return {
		get,
		post,
		destroy,
		patch
	};
};