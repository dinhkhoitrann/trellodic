'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignupMutation } from '@/redux/services/auth/auth';
import { SignupDefaultValues, SignupSchema, defaultValues } from './validation';
import SignupFormView from './view';

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
        router.push('/auth/login');
        setTimeout(() => {
          toast.success('Sign up successfully');
        }, 1000);
      },
    });
  };

  return <SignupFormView methods={methods} isSigningup={isLoading} onSubmit={handleSubmit} />;
}

export default SignupForm;
