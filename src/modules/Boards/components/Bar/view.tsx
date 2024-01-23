import Box from '@mui/material/Box';
import { useCustomTheme } from '@/common/styles/theme';
import { useAuthorized } from '@/hooks';
import Invitation from './components/Invitation';
import Charts from './components/Charts';
import DateTracker from './components/DateTracker';
import Filter from './components/Filter';
import Members from './components/Members';
import Menus from './components/Menus';
import Title from './components/Title';

function BoardBarView() {
  const customTheme = useCustomTheme();
  const { isBoardAdmin } = useAuthorized();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: customTheme.customProps.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          gap: 2,
          overflowX: 'auto',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? customTheme.colors.bgDark : customTheme.colors.bgBlueLight,
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
