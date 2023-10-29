import axios from 'axios';
import { BE_API_ROOT, FE_API_ROOT } from '../utils/constants';
import { toast } from 'react-toastify';

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
  },
});

externalRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (typeof window !== 'undefined') {
      toast.error(error.response.data?.message || error.message);
    }
    return Promise.reject(error);
  },
);
