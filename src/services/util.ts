import Cookies from 'js-cookie';

export const getHeaders = () => {
  const token = Cookies.get('token');
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
};
