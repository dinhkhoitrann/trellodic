import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

function LabelItem({ color }: { color: string }) {
  return (
    <Box
      sx={{ width: '50px', height: '40px', bgcolor: color, borderRadius: '4px', cursor: 'pointer' }}
      onClick={() => {}}
    />
  );
}

function LabelsView() {
  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Labels</Typography>
      <Stack direction="row" spacing={1}>
        <LabelItem color="#1abc9c" />
        <LabelItem color="#2980b9" />
        <Button sx={{ width: '20px' }}>
          <AddIcon />
        </Button>
      </Stack>
    </Box>
  );
}

export default LabelsView;
