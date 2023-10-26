import Cookies from 'js-cookie';

export const getHeaders = () => {
  const token = Cookies.get('token') || Cookies.get('next-auth.session-token');
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
};
