import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

type PopoverWrapperProps = {
  title: string;
  children: ReactNode[] | ReactNode;
  canGoBack?: boolean;
  onClose: () => void;
  onGoBack?: () => void;
};

function PopoverWrapper({ title, children, canGoBack, onClose, onGoBack }: PopoverWrapperProps) {
  return (
    <Box sx={{ p: 2, width: 350 }}>
      <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '32px 1fr 32px', alignItems: 'center' }}>
        {canGoBack ? (
          <IconButton sx={{ width: 'fit-content' }} onClick={onGoBack}>
            <NavigateBeforeIcon fontSize="small" />
          </IconButton>
        ) : (
          <span></span>
        )}
        <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
        <IconButton sx={{ width: 'fit-content' }} onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      {children}
    </Box>
  );
}

export default PopoverWrapper;
