'use client';
import { UseFormReturn } from 'react-hook-form';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormProvider from '@/components/Form/FormProvider';
import RHFTextField from '@/components/Form/RHFTextField';
import GoogleSignInButton from './components/GoogleSignInButton';
import Link from 'next/link';
import { Box } from '@mui/material';
import PasswordField from '@/components/Form/Fields/Password';

type FormViewProps = {
  methods: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    undefined
  >;
  onSubmit: (_values: { email: string; password: string }) => void;
};

function LoginFormView({ methods, onSubmit }: FormViewProps) {
  const { handleSubmit } = methods;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', mb: 2 }}>
        Login to continue
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="email" label="Email" id="email" placeholder="Enter your email" type="email" size="small" />
        <PasswordField name="password" label="Password" id="password" placeholder="Enter your password" size="small" />
        <Button fullWidth variant="contained" type="submit">
          Login
        </Button>
        <Divider sx={{ my: 4 }}>Or</Divider>
        <GoogleSignInButton />
        <Box sx={{ textAlign: 'center', fontSize: '14px', mt: 2 }}>
          <Link href="/auth/signup" style={{ textDecoration: 'none' }}>
            Create an account
          </Link>
        </Box>
      </FormProvider>
    </>
  );
}

export default LoginFormView;
