import { useRouter } from 'next/navigation';
import { CodeResponse } from '@react-oauth/google';
import { useLoginWithGoogleMutation } from '@/redux/services/auth/auth';
import GoogleSignInButtonView from './view';

function GoogleSignInButton() {
  const [loginWithGoogle] = useLoginWithGoogleMutation();
  const router = useRouter();

  const handleLoginSuccess = (codeResponse: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => {
    loginWithGoogle({
      code: codeResponse.code,
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return <GoogleSignInButtonView onSuccess={handleLoginSuccess} />;
}

export default GoogleSignInButton;
