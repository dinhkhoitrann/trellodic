'use client';
import Link from 'next/link';
import { UseFormReturn } from 'react-hook-form';
import { Badge, Box, Button, Divider, Typography } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import PasswordField from '@/components/Form/components/Fields/Password';
import GoogleSignInButton from './components/GoogleSignInButton';

type FormViewProps = {
  methods: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    undefined
  >;
  isLoggingin: boolean;
  onSubmit: (_values: { email: string; password: string }) => void;
};

function LoginFormView({ methods, isLoggingin, onSubmit }: FormViewProps) {
  const { handleSubmit } = methods;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', mb: 2 }}>
        Login to continue
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="email" label="Email" id="email" placeholder="Enter your email" type="email" size="small" />
        <PasswordField name="password" label="Password" id="password" placeholder="Enter your password" size="small" />
        <Button fullWidth variant="contained" type="submit" loading={isLoggingin}>
          Login
        </Button>
        <Divider sx={{ my: 4 }}>Or</Divider>
        <GoogleSignInButton />

        <Box sx={{ fontSize: '14px', mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Link href="/auth/forgot-password">Forgot password</Link>
          <Box>
            <Badge color="primary" badgeContent=" " variant="dot" sx={{ mx: 2 }} />
          </Box>
          <Link href="/auth/signup">Create an account</Link>
        </Box>
      </FormProvider>
    </>
  );
}

export default LoginFormView;
