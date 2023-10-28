import { UseFormReturn } from 'react-hook-form';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormProvider from '@/components/Form/FormProvider';
import RHFTextField from '@/components/Form/RHFTextField';
import RHFDatePicker from '@/components/Form/RHFDatePicker';
import PasswordField from '@/components/Form/Fields/Password';
import { SignupDefaultValues } from './validation';

type SignupFormViewProps = {
  methods: UseFormReturn<SignupDefaultValues, any, undefined>;
  onSubmit: (_values: SignupDefaultValues) => void;
};

function SignupFormView({ methods, onSubmit }: SignupFormViewProps) {
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
        <RHFDatePicker name="birthday" label="Birthday" />
        <Button fullWidth variant="contained" type="submit">
          Create
        </Button>
      </FormProvider>
    </>
  );
}

export default SignupFormView;
