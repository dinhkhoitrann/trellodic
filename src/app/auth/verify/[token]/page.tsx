import { Metadata } from 'next';
import VerifyEmail from '@/modules/Auth/components/Verify';
import { verifyToken } from '@/services/auth';
import { redirect } from 'next/navigation';

type Props = {
  params: { token: string };
};

export const metadata: Metadata = {
  title: 'Verify email | Tasky',
  description: 'Verify your email to sign in to our application',
};

async function VerifyEmailSignupPage({ params }: Props) {
  try {
    await verifyToken(params.token);
  } catch (error) {
    redirect('/auth/login');
  }

  return <VerifyEmail />;
}

export default VerifyEmailSignupPage;
