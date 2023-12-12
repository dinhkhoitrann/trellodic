import { UseFormReturn } from 'react-hook-form';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import RHFDatePicker from '@/components/Form/components/DatePicker';
import PasswordField from '@/components/Form/components/Fields/Password';
import { SignupDefaultValues } from './validation';

type SignupFormViewProps = {
  methods: UseFormReturn<SignupDefaultValues, any, undefined>;
  isSigningup: boolean;
  onSubmit: (_values: SignupDefaultValues) => void;
};

function SignupFormView({ methods, isSigningup, onSubmit }: SignupFormViewProps) {
  const { handleSubmit } = methods;

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', mb: 2 }}>
        Create an account to continue
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="email" label="Email" id="email" placeholder="Enter your email" type="email" size="small" />
        <RHFTextField
          name="name"
          label="Full name"
          id="name"
          placeholder="Enter your full name"
          type="text"
          size="small"
        />
        <PasswordField name="password" label="Password" id="password" placeholder="Enter your password" size="small" />
        <PasswordField
          name="confirmPassword"
          label="Confirm password"
          id="confirmPassword"
          placeholder="Enter your confirm password"
          size="small"
        />
        <RHFTextField
          name="phoneNumber"
          label="Phone number"
          id="phoneNumber"
          placeholder="Enter your phone number"
          type="phone"
          size="small"
        />
        <RHFDatePicker id="birthday" name="birthday" label="Birthday" />
        <Button fullWidth variant="contained" type="submit" disabled={isSigningup}>
          {isSigningup ? 'Creating' : 'Create'}
        </Button>
        <Box sx={{ textAlign: 'center', fontSize: '14px', mt: 2 }}>
          <Link href="/auth/login">You have already an account? Log in</Link>
        </Box>
      </FormProvider>
    </>
  );
}

export default SignupFormView;
