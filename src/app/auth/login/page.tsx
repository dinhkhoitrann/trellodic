import type { Metadata } from 'next';
import LoginForm from '@/modules/Auth/components/Login';

export const metadata: Metadata = {
  title: 'Login Page | Tasky',
  description: 'Log in to Tasky here. Not has account? Sign up for free.',
};

async function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;
