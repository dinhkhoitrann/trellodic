import { useRouter } from 'next/navigation';
import { Box, Grid } from '@/components/UIElements';
import Modal from '@/components/Modal';
import { useEditCardMutation } from '@/redux/services/card/card';
import { useView } from '@/hooks';
import { Card } from '@/types/card.type';
import AddToCard from './components/AddToCard';
import ActiveSections from './components/ActiveSections';
import Description from './components/Description';
import Checklist from './components/Checklist';
import Comments from './components/Comments';
import Attachment from './components/Attachment';

type CardDetailsViewProps = {
  card: Card;
  isError: boolean;
};

export default function CardDetailsView({ card, isError }: CardDetailsViewProps) {
  const router = useRouter();
  const [, { data }] = useEditCardMutation({
    fixedCacheKey: `shared-edit-cover-${card._id}`,
  });
  const view = useView({ data: card, isError });

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

  if (view) content = view;

  return (
    <Modal
      isVisibleModal
      onClose={handleCloseModal}
      sx={{
        transform: 'translate(-50%, -300px)',
        width: { xs: '95%', md: '75%' },
        px: 0,
        py: 0,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      }}
    >
      {content}
    </Modal>
  );
}
