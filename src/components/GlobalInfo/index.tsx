import { usePrefetch } from '@/redux/services/user/user';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type GlobalInfoProps = {
  children: React.ReactNode;
};

function GlobalInfo({ children }: GlobalInfoProps) {
  const pathname = usePathname();
  const prefetchUser = usePrefetch('getUser');

  useEffect(() => {
    if (pathname.startsWith('/auth')) return;
    prefetchUser();
  }, [pathname, prefetchUser]);

  return <>{children}</>;
}

export default GlobalInfo;
