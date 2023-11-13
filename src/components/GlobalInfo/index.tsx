import Cookies from 'js-cookie';
import { usePrefetch } from '@/redux/services/user/user';
import { useEffect } from 'react';

type GlobalInfoProps = {
  children: React.ReactNode;
};

function GlobalInfo({ children }: GlobalInfoProps) {
  const prefetchUser = usePrefetch('getUser');

  useEffect(() => {
    prefetchUser({ accessToken: Cookies.get('token') || '' });
  }, [prefetchUser]);

  return <>{children}</>;
}

export default GlobalInfo;
