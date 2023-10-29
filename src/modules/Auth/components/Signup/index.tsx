'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import SignupFormView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupDefaultValues, SignupSchema, defaultValues } from './validation';
import { useSignupMutation } from '@/redux/services/auth/auth';

function SignupForm() {
  const methods = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues,
  });
  const [signup, { isLoading }] = useSignupMutation();
  const router = useRouter();

  const handleSubmit = (values: SignupDefaultValues) => {
    signup({
      ...values,
      birthday: values.birthday.toISOString(),
      onSuccess: () => {
        toast.success('Sign up successfully');
        router.push('/auth/login');
      },
    });
  };

  return <SignupFormView methods={methods} isSigningup={isLoading} onSubmit={handleSubmit} />;
}

export default SignupForm;
