import Cookies from 'js-cookie';

export const saveAuthToken = (responseData: { data: { accessToken: string; refreshToken: string } }) => {
  const { accessToken, refreshToken } = responseData.data;
  Cookies.set('token', accessToken);
  Cookies.set('refreshToken', refreshToken);
};
