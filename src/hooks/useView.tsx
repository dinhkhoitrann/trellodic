import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ViewProps = {
  data: any;
  isLoading?: boolean;
  isError?: boolean;
};

export default function useView({ data, isLoading, isError }: ViewProps) {
  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data || isError) {
    return (
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Image src="/error.png" width={200} height={200} alt="Error" />
        <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
          Something went wrong, please try again
        </Typography>
      </Box>
    );
  }

  return null;
}
