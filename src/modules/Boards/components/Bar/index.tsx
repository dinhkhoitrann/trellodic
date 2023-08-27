import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { CustomThemeOptions } from '@/common/styles/theme';

function BoardBar() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme.customProps.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board Bar
    </Box>
  );
}

export default BoardBar;
