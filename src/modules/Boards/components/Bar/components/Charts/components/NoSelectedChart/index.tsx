import Image from 'next/image';
import { Box, Typography } from '@/components/UIElements';

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
