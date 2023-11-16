import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Members from './components/Members';
import Labels from './components/Labels';
import Checklist from './components/Checklist';
import Dates from './components/Dates';
import Attachment from './components/Attachment';
import Cover from './components/Cover';

function AddToCardView() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography sx={{ mb: 1 }}>Add to card</Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Members />
        </Grid>
        <Grid item>
          <Labels />
        </Grid>
        <Grid item>
          <Checklist />
        </Grid>
        <Grid item>
          <Dates />
        </Grid>
        <Grid item>
          <Cover />
        </Grid>
        <Grid item>
          <Attachment />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddToCardView;
