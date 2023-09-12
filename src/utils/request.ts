import axios from 'axios';
import { API_ROOT } from './constants';

const request = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    error.message = 'Something went wrong, please try again';
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    error.message = 'Something went wrong, please try again';
    return Promise.reject(error);
  },
);

export default request;
