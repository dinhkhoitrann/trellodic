import { UseFormReturn } from 'react-hook-form';
import { Box, Button } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';

type CreateFormViewProps = {
  methods: UseFormReturn<any, any>;
  isCreating: boolean;
  onSubmit: (_values: { name: string }) => void;
};

function CreateFormView({ methods, isCreating, onSubmit }: CreateFormViewProps) {
  const { handleSubmit } = methods;

  return (
    <Box sx={{ mt: 4 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="name" label="Workspace name" id="name" placeholder="Workspace name" />
        <Button fullWidth variant="contained" type="submit" disabled={isCreating} sx={{ py: '10px' }}>
          {isCreating ? 'Creating' : 'Create'}
        </Button>
      </FormProvider>
    </Box>
  );
}

export default CreateFormView;
