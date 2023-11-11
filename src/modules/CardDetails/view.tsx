import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Theme } from '@/common/enums';
import AddToCard from './components/AddToCard';
import ActiveSections from './components/ActiveSections';
import Description from './components/Description';
import Checklist from './components/Checklist';
import Comments from './components/Comments';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { Card } from '@/types/card.type';
import Modal from '@/components/Modal';
import Attachment from './components/Attachment';

type CardDetailsViewProps = {
  card: Card;
  isPending: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const style = {
  transform: 'translate(-50%, -250px)',
  width: { xs: '95%', md: '75%' },
  bgcolor: 'background.paper',
};

export default function CardDetailsView({ card, isError, error }: CardDetailsViewProps) {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  let content = (
    <Box sx={{ flex: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <ActiveSections />
          <Description />
          {card?.checklists?.map((checklist) => (
            <Checklist key={checklist._id} checklist={checklist} />
          ))}
          <Attachment />
          <Comments />
        </Grid>
        <Grid item xs={12} md={3}>
          <AddToCard />
        </Grid>
      </Grid>
    </Box>
  );

  if (isError) {
    content = <Typography>{(error as SerializedError).message}</Typography>;
  }

  return (
    <Modal
      isVisibleModal={true}
      onClose={handleCloseModal}
      sx={{
        ...style,
        bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0'),
      }}
    >
      {content}
    </Modal>
  );
}
