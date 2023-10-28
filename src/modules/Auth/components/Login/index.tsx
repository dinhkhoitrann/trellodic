'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import LoginFormView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, defaultValues } from './validation';
import { useLoginMutation } from '@/redux/services/auth/auth';

function LoginForm() {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const [login] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = (values: { email: string; password: string }) => {
    login({
      ...values,
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return <LoginFormView methods={methods} onSubmit={handleSubmit} />;
}

export default LoginForm;
