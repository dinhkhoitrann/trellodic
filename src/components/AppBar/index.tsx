import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import ModeSelect from '@/components/ModeSelect';
import { CustomThemeOptions } from '@/common/styles/theme';

function AppBar() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: theme.customProps.appBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
