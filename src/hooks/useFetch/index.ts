import { useAxiosInstance } from '../useAxiosInstance';

interface IUseFetchParams {
	endpoint: string;
}

export const useFetch = <T>(params: IUseFetchParams) => {
	const { endpoint } = params;

	const { axiosInstance } = useAxiosInstance();

	const get = async() => {
		try {
			const { data } = await axiosInstance.get<T>(endpoint);
			return data;
		} catch (error) {
			throw error;
		}
	};

	return {
		get
	};
};