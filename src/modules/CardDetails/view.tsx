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
import { useEditCardMutation } from '@/redux/services/card/card';
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
  const [, { data }] = useEditCardMutation({
    fixedCacheKey: `shared-edit-cover-${card._id}`,
  });

  const handleCloseModal = () => {
    router.back();
  };

  let content = (
    <>
      {(data?.data?.cover || card.cover) && (
        <Box
          sx={{
            overflow: 'hidden',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            backgroundImage: `url("${data?.data.cover || card.cover}")`,
            backgroundSize: 'cover',
            height: '150px',
          }}
        />
      )}
      <Box sx={{ flex: 1, px: { xs: 4, md: 5 }, py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <ActiveSections />
            <Description />
            {card?.checklists?.map((checklist) => (
              <Checklist key={checklist._id} checklist={checklist} />
            ))}
            {!!card.attachments?.length && <Attachment />}
            <Comments />
          </Grid>
          <Grid item xs={12} md={3}>
            <AddToCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );

  if (isError) {
    content = (
      <Box sx={{ p: 3 }}>
        <Typography>{(error as SerializedError).message}</Typography>
      </Box>
    );
  }

  return (
    <Modal
      isVisibleModal={true}
      onClose={handleCloseModal}
      sx={{
        ...style,
        px: 0,
        py: 0,
        bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0'),
      }}
    >
      {content}
    </Modal>
  );
}
