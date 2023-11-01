import type { Metadata } from 'next';
import ForgotPasswordForm from '@/modules/Auth/components/ForgotPassword';

export const metadata: Metadata = {
  title: 'Forgot Password Page | Trellodic',
  description: 'We are going to help to reset your password',
};

function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}

export default ForgotPasswordPage;
