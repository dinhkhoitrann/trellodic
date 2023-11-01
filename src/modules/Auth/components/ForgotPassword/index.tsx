'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPassword } from '@/services/auth';
import ForgotPasswordFormView from './view';
import { ForgotPasswordDefaultValues, ForgotPasswordSchema, defaultValues } from './validation';

function ForgotPasswordForm() {
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });
  const router = useRouter();
  const { mutate: forgotPasswordMutation, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success('Send email successfully');
      router.push('/auth/login');
    },
  });

  const handleSubmit = (values: ForgotPasswordDefaultValues) => {
    forgotPasswordMutation(values);
  };

  return <ForgotPasswordFormView methods={methods} isSending={isPending} onSubmit={handleSubmit} />;
}

export default ForgotPasswordForm;
