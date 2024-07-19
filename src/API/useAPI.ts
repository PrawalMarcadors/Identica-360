import { notification } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout, UserAuthSelector } from '../Store/Slice/User.slice';

export const useApi = () => {
	const userAuth = useSelector(UserAuthSelector);
	const dispatch = useDispatch();

	const baseApi = (headers?: Record<any, any>) => {
		const instance = axios.create({
			baseURL: import.meta.env.VITE_API_BASE_URL,
			timeout: 120000,
			headers: {
				Authorization: userAuth?.accessToken ? `Bearer ${userAuth?.accessToken}` : '',
				...headers,
			},
		});

		instance.interceptors.response.use(
			function (response) {
				return response;
			},
			function (error) {
				if (error?.response?.status === 401) {
					notification.error({
						message: error?.response?.data?.message,
					});
					dispatch(logout());
				}
				return Promise.reject(error);
			}
		);
		return instance;
	};

	return {
		baseApi,
	};
};
