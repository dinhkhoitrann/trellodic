import Image from 'next/image';
import { CodeResponse, useGoogleLogin } from '@react-oauth/google';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

type GoogleSignInButtonViewProps = {
  onSuccess: (_codeResponse: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) => void;
};

function GoogleSignInButtonView({ onSuccess }: GoogleSignInButtonViewProps) {
  const login = useGoogleLogin({
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/user.birthday.read',
      'https://www.googleapis.com/auth/user.phonenumbers.read',
    ].join(' '),
    flow: 'auth-code',
    onSuccess,
    onError: (error) => console.error('Login Failed:', error),
  });
  return (
    <Card>
      <Button
        fullWidth
        disableElevation={false}
        sx={{ color: 'black' }}
        startIcon={<Image src="/google.svg" width={24} height={24} alt="" />}
        onClick={() => login()}
      >
        Sign in with Google
      </Button>
    </Card>
  );
}

export default GoogleSignInButtonView;
