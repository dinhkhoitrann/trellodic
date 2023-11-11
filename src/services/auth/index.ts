import Cookies from 'js-cookie';
import { externalRequest } from '../request';

export const login = async (data: { email: string; password: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('http://localhost:8080/api/v1/auth/login', rest, { signal });
  return res.data;
};

export const loginWithGoogle = async (data: { code: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('http://localhost:8080/api/v1/auth/google-login', rest, { signal });
  return res.data;
};

export const signup = async (data: {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  birthday: string;
  signal: AbortSignal;
}) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('http://localhost:8080/api/v1/auth/register', rest, { signal });
  return res.data;
};

export const verifyToken = (token: string) => {
  return externalRequest.post(`http://localhost:8080/api/v1/auth/verify?token=${token}`, {});
};

export const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const res = await externalRequest.post('http://localhost:8080/api/v1/auth/refresh', { refreshToken });
  return res.data?.data.accessToken;
};

export const forgotPassword = (data: { email: string }) => {
  return externalRequest.post('http://localhost:8080/api/v1/auth/forgot-password', data);
};

export const resetPassword = (data: { password: string; confirmPassword: string; resetToken: string | null }) => {
  const { resetToken, ...rest } = data;
  return externalRequest.post(`http://localhost:8080/api/v1/auth/reset-password?resetToken=${resetToken}`, rest);
};
