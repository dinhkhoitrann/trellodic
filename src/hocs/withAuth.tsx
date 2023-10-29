import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ComponentType, useEffect } from 'react';

export default function withAuth<P extends object>(Component: ComponentType<P>) {
  const WithAuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        router.push('/auth/login');
      }
    }, [router]);

    return <Component {...(props as P)} />;
  };

  return WithAuthComponent;
}
