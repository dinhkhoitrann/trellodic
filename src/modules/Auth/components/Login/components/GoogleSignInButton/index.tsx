import { signIn } from 'next-auth/react';
import GoogleSignInButtonView from './view';

function GoogleSignInButton() {
  return <GoogleSignInButtonView onSignin={() => signIn('google', { callbackUrl: '/' })} />;
}

export default GoogleSignInButton;
