'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { resetPassword } from '@/services/auth';
import ResetPasswordFormView from './view';
import { ResetPasswordDefaultValues, ResetPasswordSchema, defaultValues } from './validation';

function ResetPasswordForm() {
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });
  const router = useRouter();
  const { mutate: resetPasswordMutation, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      router.push('/auth/login');
      toast.success('Updated password successfully');
    },
  });
  const searchParams = useSearchParams();

  const handleSubmit = (values: ResetPasswordDefaultValues) => {
    resetPasswordMutation({ ...values, resetToken: searchParams.get('resetToken') });
  };

  return <ResetPasswordFormView methods={methods} isSending={isPending} onSubmit={handleSubmit} />;
}

export default ResetPasswordForm;
