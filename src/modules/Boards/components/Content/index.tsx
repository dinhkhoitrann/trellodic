import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { CustomThemeOptions } from '@/common/styles/theme';

function BoardContent() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: `calc(100vh - ${theme.customProps.appBarHeight} - ${theme.customProps.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
