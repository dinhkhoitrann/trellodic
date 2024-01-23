import { UseFormReturn } from 'react-hook-form';
import { Box, Button, Typography } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import PasswordField from '@/components/Form/components/Fields/Password';
import { ResetPasswordDefaultValues } from './validation';

type ResetPasswordFormViewProps = {
  methods: UseFormReturn<ResetPasswordDefaultValues, any, undefined>;
  isSending: boolean;
  onSubmit: (_values: ResetPasswordDefaultValues) => void;
};

function ResetPasswordFormView({ methods, isSending, onSubmit }: ResetPasswordFormViewProps) {
  const { handleSubmit } = methods;
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
          Reset password
        </Typography>
        <Typography variant="caption" sx={{ mb: 2 }}>
          Set a new password for your account
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <PasswordField name="password" label="Password" id="password" placeholder="Enter your password" size="small" />
        <PasswordField
          name="confirmPassword"
          label="Confirm password"
          id="confirmPassword"
          placeholder="Enter your confirm password"
          size="small"
        />
        <Button fullWidth variant="contained" type="submit" disabled={isSending}>
          {isSending ? 'Sending' : 'Send'}
        </Button>
      </FormProvider>
    </Box>
  );
}

export default ResetPasswordFormView;
