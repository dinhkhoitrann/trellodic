import Image from 'next/image';
import { Box, Button, Typography } from '@/components/UIElements';

type VerifyEmailViewProps = {
  onLogin: () => void;
};

function VerifyEmailView({ onLogin }: VerifyEmailViewProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '10%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src="/verified.png" alt="Verified email" width={120} height={120} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
        Your email has been verified
      </Typography>
      <Typography>You can now sign in with your new account</Typography>
      <Button variant="contained" sx={{ mt: 2, py: 1, width: 200 }} onClick={onLogin}>
        Log in now
      </Button>
    </Box>
  );
}

export default VerifyEmailView;
