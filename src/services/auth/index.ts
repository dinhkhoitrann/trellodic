import Cookies from 'js-cookie';
import { externalRequest } from '../request';

export const login = ({ signal, ...rest }: { email: string; password: string; signal: AbortSignal }) => {
  return externalRequest.post('http://localhost:8080/api/v1/auth/login', rest, { signal });
};

export const loginWithGoogle = ({ signal, ...rest }: { code: string; signal: AbortSignal }) => {
  return externalRequest.post('http://localhost:8080/api/v1/auth/google-login', rest, { signal });
};

export const signup = ({
  signal,
  ...rest
}: {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  birthday: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('http://localhost:8080/api/v1/auth/register', rest, { signal });
};

export const verifyToken = (token: string) => {
  return externalRequest.post(`http://localhost:8080/api/v1/auth/verify?token=${token}`, {});
};

export const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const res: { accessToken: string } = await externalRequest.post('http://localhost:8080/api/v1/auth/refresh', {
    refreshToken,
  });
  return res.accessToken;
};

export const forgotPassword = (data: { email: string }) => {
  return externalRequest.post('http://localhost:8080/api/v1/auth/forgot-password', data);
};

export const resetPassword = (data: { password: string; confirmPassword: string; resetToken: string | null }) => {
  const { resetToken, ...rest } = data;
  return externalRequest.post(`http://localhost:8080/api/v1/auth/reset-password?resetToken=${resetToken}`, rest);
};
