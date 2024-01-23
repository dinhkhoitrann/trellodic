import { UseFormReturn } from 'react-hook-form';
import { Box, Button, Card, Grid, Typography } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import RHFDatePicker from '@/components/Form/components/DatePicker';
import { UserProfileFormValues } from './validation';

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
        <Card.Content>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  id="name"
                  name="name"
                  label="Full name"
                  placeholder="Enter your full name"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  size="small"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                  placeholder="Enter your phone number"
                  type="phone"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <RHFDatePicker id="birthday" name="birthday" label="Birthday" />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'end' }}>
              <Button variant="contained" type="submit" disabled={!isDirty || !isValid || isSubmitting}>
                Save
              </Button>
            </Box>
          </FormProvider>
        </Card.Content>
      </Card>
    </>
  );
}

export default ProfileDetailsView;
