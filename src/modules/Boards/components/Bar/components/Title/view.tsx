import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StyledModal from '@/components/Modal/components/StyledModal';
import FormProvider from '@/components/Form/components/FormProvider';
import RHFTextField from '@/components/Form/components/TextField';
import { StyledChip, getStyledIcon } from '@/components/_shared/Board/components/Chip';
import { Board } from '@/types/board.type';
import { TitleDefaultValues } from './validation';

type TitleViewProps = {
  board: Board;
  methods: UseFormReturn<TitleDefaultValues, any, undefined>;
  isEditing: boolean;
  isSuccess: boolean;
  onSubmit: (_values: TitleDefaultValues) => void;
};

function TitleView({ board, methods, isEditing, isSuccess, onSubmit }: TitleViewProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { handleSubmit } = methods;

  const StyledDashboardIcon = getStyledIcon(DashboardIcon);

  useEffect(() => {
    setIsVisibleModal(false);
  }, [isSuccess]);

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <StyledChip icon={<StyledDashboardIcon />} label={board?.name} clickable onClick={handleModalVisibility} />
      <StyledModal isVisibleModal={isVisibleModal} onClose={handleModalVisibility}>
        <Typography fontWeight="bold" sx={{ mb: 3 }}>
          Edit board
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField
            name="title"
            label="Board title"
            id="title"
            placeholder="Edit board title"
            type="text"
            size="small"
          />
          <Button fullWidth variant="contained" type="submit" disabled={isEditing}>
            Save
          </Button>
        </FormProvider>
      </StyledModal>
    </>
  );
}

export default TitleView;
