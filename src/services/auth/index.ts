import { externalRequest } from '../request';

export const login = (data: { email: string; password: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('http://localhost:8080/api/v1/auth/login', rest, { signal });
};
