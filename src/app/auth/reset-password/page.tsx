import type { Metadata } from 'next';
import ResetPasswordForm from '@/modules/Auth/components/ResetPassword';

export const metadata: Metadata = {
  title: 'Reset Password Page | Trellodic',
  description: 'Set a new password for your account',
};

function ResetPasswordPage() {
  return <ResetPasswordForm />;
}

export default ResetPasswordPage;
