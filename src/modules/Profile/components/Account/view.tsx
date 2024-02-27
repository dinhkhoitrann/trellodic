import { UseFormReturn } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Box, Button, Card, Grid, Typography } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import PasswordField from '@/components/Form/components/Fields/Password';
import { ChangePasswordFormValues } from './validation';

type AccountViewProps = {
  methods: UseFormReturn<ChangePasswordFormValues>;
  onSubmit: (_values: ChangePasswordFormValues) => void;
};

function AccountView({ methods, onSubmit }: AccountViewProps) {
  const {
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = methods;

  return (
    <>
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>Account</Typography>
      <Card sx={{ mt: 2 }}>
        <Accordion>
          <Accordion.Summary expandIcon={<ExpandMoreIcon />}>
            <Typography>Change password</Typography>
          </Accordion.Summary>
          <Accordion.Details>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PasswordField
                    name="currentPassword"
                    label="Current password"
                    id="currentPassword"
                    placeholder="Enter your current password"
                    size="small"
                  />
                  <PasswordField
                    name="newPassword"
                    label="New password"
                    id="newPassword"
                    placeholder="Enter your new password"
                    size="small"
                  />
                  <PasswordField
                    name="confirmNewPassword"
                    label="Confirm new password"
                    id="confirmNewPassword"
                    placeholder="Enter your confirm new password"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Box sx={{ textAlign: 'end' }}>
                <Button variant="contained" type="submit" disabled={!isDirty} loading={isSubmitting}>
                  Save
                </Button>
              </Box>
            </FormProvider>
          </Accordion.Details>
        </Accordion>
      </Card>
    </>
  );
}

export default AccountView;
