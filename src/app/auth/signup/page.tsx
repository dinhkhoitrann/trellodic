import type { Metadata } from 'next';
import SignupForm from '@/modules/Auth/components/Signup';

export const metadata: Metadata = {
  title: 'Signup Page | Tasky',
  description: "You don't have account? Create an account for free.",
};

async function SignupPage() {
  return <SignupForm />;
}

export default SignupPage;
