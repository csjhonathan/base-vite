import { IUseFetchParams, IUseFetch, IMakeRequestOptions } from '../../types/hooks/useFetch';

import { useAxiosInstance } from '../useAxiosInstance';

export const useFetch = <R>(params: IUseFetchParams): IUseFetch<R> => {
	const { endpoint } = params;

	const axiosInstance = useAxiosInstance();

	const makeRequest = async<R>(options: IMakeRequestOptions) => {
		const { method, body } = options;
    
		switch (method) {
			case 'GET':
				return axiosInstance.get<R>(endpoint);
			case 'POST':
				return axiosInstance.post<R>(endpoint, body);
			case 'PATCH':
				return axiosInstance.patch<R>(endpoint, body);
			case 'DELETE':
				return axiosInstance.delete<R>(endpoint);
			default:
				throw new Error('Invalid method');
		}
	};

	const get = async<R>() => {
		try {
			const { data } = await makeRequest<R>({ method: 'GET' });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const post = async<R, B>(body: B) => {
		try {
			const { data } = await makeRequest<R>({ method: 'POST', body });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const patch = async<R, B>(body: B) => {
		try {
			const { data } = await makeRequest<R>({ method: 'PATCH', body });
			return data;
		} catch (error) {
			throw error;
		}
	};

	const destroy = async<R>() => {
		try {
			const { data } = await makeRequest<R>({ method: 'DELETE' });
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