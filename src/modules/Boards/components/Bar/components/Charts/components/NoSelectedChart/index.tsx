import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NoSelectedChart() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Image src="/diagram.png" width={200} height={200} alt="No charts selected" />
      <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
        Select your chart
      </Typography>
    </Box>
  );
}

export default NoSelectedChart;
