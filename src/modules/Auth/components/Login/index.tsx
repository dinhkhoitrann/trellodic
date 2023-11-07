'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import LoginFormView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, defaultValues } from './validation';
import { useLoginMutation } from '@/redux/services/auth/auth';
import { externalRequest } from '@/services/request';

function LoginForm() {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = (values: { email: string; password: string }) => {
    login({
      ...values,
      onSuccess: () => {
        router.push('/');
        externalRequest.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`;
      },
    });
  };

  return <LoginFormView methods={methods} isLoggingin={isLoading} onSubmit={handleSubmit} />;
}

export default LoginForm;
