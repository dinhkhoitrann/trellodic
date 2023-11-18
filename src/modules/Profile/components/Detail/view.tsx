import { UseFormReturn } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormProvider from '@/components/Form/components/FormProvider';
import { UserProfileFormValues } from './validation';
import RHFTextField from '@/components/Form/components/TextField';
import { Box, Button, Grid } from '@mui/material';
import RHFDatePicker from '@/components/Form/components/DatePicker';

type ProfileDetailsViewProps = {
  methods: UseFormReturn<UserProfileFormValues>;
  onSubmit: (_values: UserProfileFormValues) => void;
};

function ProfileDetailsView({ methods, onSubmit }: ProfileDetailsViewProps) {
  const {
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  return (
    <>
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>About you</Typography>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  name="name"
                  label="Full name"
                  placeholder="Enter your full name"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFTextField name="email" label="Email" placeholder="Enter your email" type="email" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  name="phoneNumber"
                  label="Phone number"
                  placeholder="Enter your phone number"
                  type="phone"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFDatePicker name="birthday" label="Birthday" />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'end' }}>
              <Button variant="contained" type="submit" disabled={!isDirty || !isValid || isSubmitting}>
                Save
              </Button>
            </Box>
          </FormProvider>
        </CardContent>
      </Card>
    </>
  );
}

export default ProfileDetailsView;
