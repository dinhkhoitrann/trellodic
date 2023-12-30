import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';
import { CustomThemeOptions } from '@/common/styles/theme';
import { useAuthorized } from '@/hooks';
import Invitation from './components/Invitation';
import Charts from './components/Charts';
import DateTracker from './components/DateTracker';
import Filter from './components/Filter';
import Members from './components/Members';
import Menus from './components/Menus';
import Title from './components/Title';

function BoardBarView() {
  const theme = useTheme<CustomThemeOptions>();
  const { isBoardAdmin } = useAuthorized();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: theme.customProps.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          gap: 2,
          overflowX: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24272b' : '#1976d2'),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Title />
          <Filter />
          <Menus />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {isBoardAdmin && (
            <>
              <DateTracker />
              <Charts />
              <Invitation />
            </>
          )}
          <Members />
        </Box>
      </Box>
    </>
  );
}

export default BoardBarView;
