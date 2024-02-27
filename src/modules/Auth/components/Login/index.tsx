'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/redux/services/auth/auth';
import { externalRequest } from '@/services/request';
import { LoginSchema, defaultValues } from './validation';
import LoginFormView from './view';

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
        externalRequest.defaults.headers['Authorization'] = `Bearer ${Cookies.get('token')}`;
      },
    });
  };

  return <LoginFormView methods={methods} isLoggingin={isLoading} onSubmit={handleSubmit} />;
}

export default LoginForm;
