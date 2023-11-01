import { UseFormReturn } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormProvider from '@/components/Form/FormProvider';
import RHFTextField from '@/components/Form/RHFTextField';
import { ForgotPasswordDefaultValues } from './validation';

type ForgotPasswordFormViewProps = {
  methods: UseFormReturn<ForgotPasswordDefaultValues, any, undefined>;
  isSending: boolean;
  onSubmit: (_values: ForgotPasswordDefaultValues) => void;
};

function ForgotPasswordFormView({ methods, isSending, onSubmit }: ForgotPasswordFormViewProps) {
  const { handleSubmit } = methods;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
          Forgot password
        </Typography>
        <Typography variant="caption" sx={{ mb: 2 }}>
          We will send you an email with a link to reset password
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="email" label="Email" id="email" placeholder="Enter your email" type="email" size="small" />
        <Button fullWidth variant="contained" type="submit" disabled={isSending}>
          {isSending ? 'Sending' : 'Send'}
        </Button>
      </FormProvider>
    </Box>
  );
}

export default ForgotPasswordFormView;
