import type { Metadata } from 'next';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LoginForm from '@/modules/Auth/components/Login';

export const metadata: Metadata = {
  title: 'Login Page | Trellodic',
  description: 'Log in to Trellodic here. Not has account? Sign up for free.',
};

async function LoginPage() {
  const session = await getAuthSession();
  if (session) return redirect('/');

  return <LoginForm />;
}

export default LoginPage;
