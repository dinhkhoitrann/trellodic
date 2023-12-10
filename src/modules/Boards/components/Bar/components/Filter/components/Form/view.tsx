import { UseFormReturn } from 'react-hook-form';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFSelect from '@/components/Form/components/Select';
import { FilterDefaultValues } from './validation';

type FormViewProps = {
  isOpen: boolean;
  methods: UseFormReturn<FilterDefaultValues, any, undefined>;
  onClose: () => void;
  onSubmit: (_values: FilterDefaultValues) => void;
};

const FORM_ID = 'filter-board';

function FormView({ isOpen, methods, onClose, onSubmit }: FormViewProps) {
  const { handleSubmit } = methods;

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          width: { xs: '100vw', sm: '20rem' },
          height: '100%',
          maxHeight: '100%',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: '16px !important' }}>Filter</Typography>
          <Divider sx={{ mx: '-24px', mt: 2 }} />
        </Box>
        <Box sx={{ overflowY: 'auto', flex: 1 }}>
          <FormProvider id={FORM_ID} methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <RHFSelect id="label" name="label" label="Label" options={['111', '222', '333']} />
          </FormProvider>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'end',
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button form={FORM_ID} variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default FormView;
