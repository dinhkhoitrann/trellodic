import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { CustomThemeOptions } from '@/common/styles/theme';
import { Theme } from '@/common/enums';
import ListColumns from './ListColumns';

function BoardContentView() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        width: '100%',
        height: theme.customProps.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#34495e' : '#1976d2'),
        p: '10px 0',
      }}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: 2,
          },
        }}
      >
        <ListColumns />
      </Box>
    </Box>
  );
}

export default BoardContentView;
