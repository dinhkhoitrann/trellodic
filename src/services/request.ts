import axios from 'axios';
import { BE_API_ROOT, FE_API_ROOT } from '../utils/constants';

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
