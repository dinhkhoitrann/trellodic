import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormProvider from '@/components/Form/FormProvider';
import RHFTextField from '@/components/Form/RHFTextField';
import GoogleSignInButton from '../GoogleSignInButton';

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

function FormView({ methods, onSubmit }: FormViewProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email" id="email" placeholder="Enter your email" type="email" size="small" />
      <RHFTextField
        name="password"
        label="Password"
        id="password"
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShowPassword((prevState) => !prevState)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button fullWidth variant="contained" type="submit">
        Login
      </Button>
      <Divider sx={{ my: 4 }}>Or</Divider>
      <GoogleSignInButton />
    </FormProvider>
  );
}

export default FormView;
