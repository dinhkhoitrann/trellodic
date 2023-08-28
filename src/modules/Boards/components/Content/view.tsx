import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { CustomThemeOptions } from '@/common/styles/theme';
import { Theme } from '@/common/enums';

function BoardContentView() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        width: '100%',
        height: `calc(100vh - ${theme.customProps.appBarHeight} - ${theme.customProps.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
        bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#34495e' : '#1976d2'),
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContentView;
