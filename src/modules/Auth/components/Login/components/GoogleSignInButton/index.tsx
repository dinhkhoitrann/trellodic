import GoogleSignInButtonView from './view';

function GoogleSignInButton() {
  return <GoogleSignInButtonView onSignin={() => console.log('Sign in with Google')} />;
}

export default GoogleSignInButton;
