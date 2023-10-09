import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
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
import Attachment from './components/Attachment';

type CardDetailsViewProps = {
  card: Card;
  isPending: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -250px)',
  width: { xs: '95%', md: '75%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '6px',
  px: { xs: 4, md: 5 },
  py: 4,
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
    <div>
      <Modal
        open
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ overflow: 'auto' }}
      >
        <div>
          <Fade in>
            <Box
              sx={{
                ...style,
                bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0'),
                color: (theme) => (theme.palette.mode === Theme.Light ? '#172b4d' : '#B6C2CF'),
              }}
            >
              {content}
            </Box>
          </Fade>
        </div>
      </Modal>
    </div>
  );
}
