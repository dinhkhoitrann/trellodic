import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Card } from '@/types/card.type';
import Members from './components/Members';
import Labels from './components/Labels';
import Dates from './components/Dates';
import { Theme } from '@/common/enums';
import AddToCard from './components/AddToCard';

type CardDetailsViewProps = {
  card: Card;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', md: '80%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '6px',
  px: { xs: 4, md: 5 },
  py: 4,
};

export default function CardDetailsView({ card, isPending, isError, error }: CardDetailsViewProps) {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  let content = (
    <Box sx={{ flex: 1 }}>
      <Tooltip title={card?.title}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LaptopIcon />
          <Typography variant="h6" component="span" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {card?.title}
          </Typography>
        </Stack>
      </Tooltip>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item>
              <Members />
            </Grid>
            <Grid item>
              <Labels />
            </Grid>
            <Grid item>
              <Dates />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <AddToCard />
        </Grid>
      </Grid>
    </Box>
  );

  if (isPending) {
    content = <Typography>Loading...</Typography>;
  }

  if (isError) {
    content = <Typography>{error?.message}</Typography>;
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
      >
        <Fade in>
          <Box sx={{ ...style, bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0') }}>
            {content}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
