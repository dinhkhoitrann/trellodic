'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';

type ProfilePhotoViewProps = {
  uploadedImage: string | ArrayBuffer | null | undefined;
  isLoading: boolean;
  onSaveAvatar: () => void;
  onUpload: (_event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ProfilePhotoView({ uploadedImage, isLoading, onSaveAvatar, onUpload }: ProfilePhotoViewProps) {
  const user = useAppSelector(selectUserProfile);

  const renderUploadButton = () => {
    if (uploadedImage)
      return (
        <Button variant="contained" sx={{ minWidth: '200px', mt: 2 }} disabled={isLoading} onClick={onSaveAvatar}>
          {isLoading ? 'Uploading' : 'Upload'}
        </Button>
      );
  };

  return (
    <>
      <Typography sx={{ mt: 2, fontSize: '1rem !important', fontWeight: 'bold' }}>
        Profile photo and header image
      </Typography>
      <Card sx={{ mt: 2 }}>
        <CardMedia
          sx={{ height: 120 }}
          image="https://ptc-directory-sited-static.us-east-1.prod.public.atl-paas.net/gradients/5.svg"
          title="green iguana"
        />
        <CardContent sx={{ mt: '-60px' }}>
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ position: 'relative' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                }}
                src={uploadedImage?.toString() || user?.avatar}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 4,
                  right: 8,
                  backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#41464b' : '#bdc3c7'),
                  transition: 'all 0.15s',
                  '&:hover': {
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#41464b' : '#bdc3c7'),
                    opacity: 0.9,
                  },
                }}
                component="label"
              >
                <input type="file" accept=".png,.jpg,.jpeg,.webp" hidden onChange={onUpload} />
                <PhotoCameraIcon />
              </IconButton>
            </Box>
            {renderUploadButton()}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default ProfilePhotoView;
