'use client';
import { UseFormReturn } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import GoogleSignInButton from './components/GoogleSignInButton';
import Link from 'next/link';
import PasswordField from '@/components/Form/components/Fields/Password';

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
        <Button fullWidth variant="contained" type="submit" disabled={isLoggingin}>
          {isLoggingin ? 'Logging in' : 'Login'}
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
