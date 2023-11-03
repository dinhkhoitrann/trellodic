import { useRouter } from 'next/navigation';
import GoogleSignInButtonView from './view';

function GoogleSignInButton() {
  const router = useRouter();

  return <GoogleSignInButtonView onSignin={() => router.push('http://localhost:8080/api/v1/auth/google')} />;
}

export default GoogleSignInButton;
