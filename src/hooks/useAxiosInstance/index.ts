import axios from 'axios';

const {
	VITE_APP_API_URL
} = import.meta.env;

export const useAxiosInstance = () => {

	const axiosInstance = axios.create({
		baseURL: VITE_APP_API_URL
	});

	return axiosInstance;
};