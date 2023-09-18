import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Members from './components/Members';
import Labels from './components/Labels';

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
      </Grid>
    </Box>
  );
}

export default AddToCardView;
