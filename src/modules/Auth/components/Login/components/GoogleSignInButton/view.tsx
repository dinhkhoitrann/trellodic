import Image from 'next/image';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

type GoogleSignInButtonViewProps = {
  onSignin: () => void;
};

function GoogleSignInButtonView({ onSignin }: GoogleSignInButtonViewProps) {
  return (
    <Card>
      <Button
        fullWidth
        disableElevation={false}
        sx={{ color: 'black' }}
        startIcon={<Image src="/google.svg" width={24} height={24} alt="" />}
        onClick={onSignin}
      >
        Sign in with Google
      </Button>
    </Card>
  );
}

export default GoogleSignInButtonView;
