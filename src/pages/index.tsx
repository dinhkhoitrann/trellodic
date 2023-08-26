import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { CustomThemeOptions } from '@/common/styles/theme';

export default function Home() {
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
