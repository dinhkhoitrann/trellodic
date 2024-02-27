import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Typography } from '@/components/UIElements';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import RHFAutocomplete from '@/components/Form/components/Autocomplete';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceList } from '@/redux/slices/workspace';
import { Workspace } from '@/types/workspace.type';

type CreateFormViewProps = {
  methods: UseFormReturn<any, any>;
  isLoading: boolean;
  onSubmit: (_values: { name: string; workspace: Workspace }) => void;
  onClose: () => void;
};

function CreateFormView({ methods, isLoading, onSubmit, onClose }: CreateFormViewProps) {
  const { handleSubmit } = methods;
  const workspaces = useAppSelector(selectWorkspaceList);

  return (
    <Box sx={{ p: 2, width: 300 }}>
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '32px 1fr 32px', alignItems: 'center' }}>
        <span></span>
        <Typography sx={{ textAlign: 'center' }}>Create new board</Typography>
        <IconButton sx={{ width: 'fit-content' }} onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          height: 150,
          backgroundPosition: 'center center',
          borderRadius: '4px',
          mt: 2,
          mb: 4,
          backgroundImage:
            // eslint-disable-next-line max-len
            'url("https://images.unsplash.com/photo-1696580436068-f19c26850e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjk3MzQ4MDYzfA&ixlib=rb-4.0.3&q=80&w=400")',
        }}
      >
        <Image src="/create-board.svg" alt="" width={150} height={150} />
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="name" label="Board title" id="name" placeholder="Board title" size="small" />
        <RHFAutocomplete
          name="workspace"
          label="Workspace"
          size="small"
          id="workspace"
          options={[...workspaces]}
          getOptionLabel={(option: Partial<Workspace>) => option.name || ''}
          isOptionEqualToValue={(option: any, value: any) => option === value}
        />
        <Button fullWidth variant="contained" type="submit" loading={isLoading} sx={{ mt: 2 }}>
          Create
        </Button>
      </FormProvider>
    </Box>
  );
}

export default CreateFormView;
