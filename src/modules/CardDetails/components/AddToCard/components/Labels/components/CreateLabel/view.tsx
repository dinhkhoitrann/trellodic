import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e'];

function CreateLabelView() {
  return (
    <>
      <TextField fullWidth size="small" placeholder="Title" sx={{ marginTop: '20px' }} />
      <Typography sx={{ my: 2 }}>Select a color</Typography>
      <Grid container spacing={1}>
        {colors.map((color, index) => (
          <Grid key={index} item>
            <Box sx={{ width: '50px', height: '35px', bgcolor: color, borderRadius: '4px' }} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" sx={{ mt: 2 }}>
        Create
      </Button>
    </>
  );
}

export default CreateLabelView;
