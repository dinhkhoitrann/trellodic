import { ReactNode } from 'react';
import AuthFormView from './view';

function AuthForm({ children }: { children: ReactNode }) {
  return <AuthFormView>{children}</AuthFormView>;
}

export default AuthForm;
