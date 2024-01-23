import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAppDispatch } from '@/redux/store';
import { resetStates } from '@/redux/actions';
import ProfilesView from './view';

function Profiles() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    dispatch(resetStates());
    router.push('/auth/login');
  };

  return <ProfilesView onLogout={handleLogout} />;
}

export default Profiles;
