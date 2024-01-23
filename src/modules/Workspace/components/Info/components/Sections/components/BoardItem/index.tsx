import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import { Box } from '@/components/UIElements';

type BoardItemProps = {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
  onClick?: (..._allParams: any[]) => void;
};

function BoardItem({ children, sx, onClick }: BoardItemProps) {
  return (
    <Box
      sx={{
        width: '190px',
        height: '96px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.875rem',
        '&:hover': { opacity: 0.8 },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}

export default BoardItem;
