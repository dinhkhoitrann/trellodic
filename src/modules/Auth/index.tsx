import { PropsWithChildren } from 'react';
import AuthFormView from './view';

function AuthForm({ children }: PropsWithChildren) {
  return <AuthFormView>{children}</AuthFormView>;
}

export default AuthForm;
