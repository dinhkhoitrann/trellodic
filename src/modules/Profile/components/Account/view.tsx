import { UseFormReturn } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Change password</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
                <Button variant="contained" type="submit" disabled={isSubmitting || !isDirty}>
                  Save
                </Button>
              </Box>
            </FormProvider>
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
}

export default AccountView;
