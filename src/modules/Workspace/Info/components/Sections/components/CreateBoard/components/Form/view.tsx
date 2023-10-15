import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type CreateFormViewProps = {
  onClose: () => void;
};

function CreateFormView({ onClose }: CreateFormViewProps) {
  return (
    <Box sx={{ p: 2, width: 300 }}>
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '32px 1fr 32px', alignItems: 'center' }}>
        <span></span>
        <Typography sx={{ textAlign: 'center' }}>Create new board</Typography>
        <IconButton sx={{ width: 'fit-content' }} onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          height: 150,
          backgroundPosition: 'center center',
          borderRadius: '4px',
          mt: 2,
          backgroundImage:
            // eslint-disable-next-line max-len
            'url("https://images.unsplash.com/photo-1696580436068-f19c26850e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjk3MzQ4MDYzfA&ixlib=rb-4.0.3&q=80&w=400")',
        }}
      >
        <Image src="/create-board.svg" alt="" width={150} height={150} />
      </Box>
    </Box>
  );
}

export default CreateFormView;
