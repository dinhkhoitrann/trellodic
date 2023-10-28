'use client';
import { useForm } from 'react-hook-form';
import SignupFormView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupDefaultValues, SignupSchema, defaultValues } from './validation';

function SignupForm() {
  const methods = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues,
  });

  const handleSubmit = (values: SignupDefaultValues) => {
    console.log(values);
  };

  return <SignupFormView methods={methods} onSubmit={handleSubmit} />;
}

export default SignupForm;
