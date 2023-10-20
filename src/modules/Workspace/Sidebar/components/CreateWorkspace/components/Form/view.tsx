import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormProvider from '@/components/Form/FormProvider';
import RHFTextField from '@/components/Form/RHFTextField';
import { UseFormReturn } from 'react-hook-form';

type CreateFormViewProps = {
  methods: UseFormReturn<any, any>;
  onSubmit: (_values: { name: string }) => void;
};

function CreateFormView({ methods, onSubmit }: CreateFormViewProps) {
  const { handleSubmit } = methods;

  return (
    <Box sx={{ mt: 4 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="name" label="Workspace name" id="name" placeholder="Workspace name" />
        <Button fullWidth variant="contained" type="submit" sx={{ py: '10px' }}>
          Create
        </Button>
      </FormProvider>
    </Box>
  );
}

export default CreateFormView;
