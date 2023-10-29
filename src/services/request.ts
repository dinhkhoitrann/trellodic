import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { BE_API_ROOT, FE_API_ROOT } from '../utils/constants';
import { refreshToken } from './auth';

export const internalRequest = axios.create({
  baseURL: FE_API_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const externalRequest = axios.create({
  baseURL: BE_API_ROOT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token') && `Bearer ${Cookies.get('token')}`,
  },
});

externalRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (typeof window !== 'undefined') {
      toast.error(error.response.data?.message || error.message);
    }
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await refreshToken();
      Cookies.set('token', newAccessToken);

      externalRequest.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      return externalRequest(originalRequest);
    }
    return Promise.reject(error);
  },
);
