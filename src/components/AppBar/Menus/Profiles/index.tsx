import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import ProfilesView from './view';

function Profiles() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    router.push('/auth/login');
  };

  return <ProfilesView onLogout={handleLogout} />;
}

export default Profiles;
