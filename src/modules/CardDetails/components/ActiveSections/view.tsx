import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import LaptopIcon from '@mui/icons-material/Laptop';
import Members from '../Members';
import Labels from '../Labels';
import Dates from '../Dates';
import { Card } from '@/types/card.type';

type ActiveSectionsViewProps = {
  card?: Card;
};

function ActiveSectionsView({ card }: ActiveSectionsViewProps) {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LaptopIcon />
        <Typography variant="h6" component="span" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {card?.title}
        </Typography>
      </Stack>
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
    </>
  );
}

export default ActiveSectionsView;
