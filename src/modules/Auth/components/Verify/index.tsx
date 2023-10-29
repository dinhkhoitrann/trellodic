'use client';
import { useRouter } from 'next/navigation';
import VerifyEmailView from './view';

function VerifyEmail() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return <VerifyEmailView onLogin={handleLogin} />;
}

export default VerifyEmail;
