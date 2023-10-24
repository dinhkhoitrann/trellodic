import type { Metadata } from 'next';
import Login from '@/modules/Auth/Login';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login Page | Trellodic',
  description: 'Log in to Trellodic here. Not has account? Sign up for free.',
};

async function LoginPage() {
  const session = await getAuthSession();
  if (session) return redirect('/');

  return <Login />;
}

export default LoginPage;
