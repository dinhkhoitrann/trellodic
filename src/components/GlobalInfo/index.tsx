import { PropsWithChildren, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePrefetch as usePrefetchUser } from '@/redux/services/user/user';
import { usePrefetch as usePrefetchWorkspaceList } from '@/redux/services/workspace/workspace';

function GlobalInfo({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const prefetchUser = usePrefetchUser('getUser');
  const prefetchWorkspaceList = usePrefetchWorkspaceList('getWorkspaceList');

  useEffect(() => {
    if (pathname.startsWith('/auth')) return;
    prefetchUser();
    prefetchWorkspaceList();
  }, [pathname, prefetchUser, prefetchWorkspaceList]);

  return <>{children}</>;
}

export default GlobalInfo;
