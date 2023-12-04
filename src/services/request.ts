import axios from 'axios';
import Cookies from 'js-cookie';
import { BE_API_ROOT, EXCEPTION_URL_REFRESH_TOKEN, FE_API_ROOT } from '../utils/constants';
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
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
});

externalRequest.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

externalRequest.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
      if (EXCEPTION_URL_REFRESH_TOKEN.includes(originalRequest.url)) return;
      originalRequest._retry = true;

      const newAccessToken = await refreshToken();
      Cookies.set('token', newAccessToken);

      externalRequest.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      return externalRequest(originalRequest);
    }
    return Promise.reject(error);
  },
);
