import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentType, useEffect } from 'react';

export default function withAuth<P extends object>(Component: ComponentType<P>) {
  const WithAuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      const token = Cookies.get('token');
      if (!token && !pathname.startsWith('/auth')) {
        router.push('/auth/login');
      }
    }, [pathname, router]);

    return <Component {...(props as P)} />;
  };

  return WithAuthComponent;
}
