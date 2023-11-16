import Cookies from 'js-cookie';
import { externalRequest } from '../request';

export const login = ({ signal, ...rest }: { email: string; password: string; signal: AbortSignal }) => {
  return externalRequest.post('/auth/login', rest, { signal });
};

export const loginWithGoogle = ({ code }: { code: string }) => {
  return externalRequest.post('/auth/google-login', { code });
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
  return externalRequest.post('/auth/register', rest, { signal });
};

export const verifyToken = (token: string) => {
  return externalRequest.post(`/auth/verify?token=${token}`, {});
};

export const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const {
    data: { accessToken },
  } = await externalRequest.post('/auth/refresh', {
    refreshToken,
  });
  return accessToken;
};

export const forgotPassword = (data: { email: string }) => {
  return externalRequest.post('/auth/forgot-password', data);
};

export const resetPassword = ({
  resetToken,
  ...rest
}: {
  password: string;
  confirmPassword: string;
  resetToken: string | null;
}) => {
  return externalRequest.post(`/auth/reset-password?resetToken=${resetToken}`, rest);
};
