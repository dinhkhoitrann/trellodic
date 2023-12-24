import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useTheme } from '@mui/styles';
import { CustomThemeOptions } from '@/common/styles/theme';
import { Board } from '@/types/board.type';
import { useColorScheme } from '@mui/material';
import { useAuthorized } from '@/hooks';
import Invitation from './components/Invitation';
import Charts from './components/Charts';
import DateTracker from './components/DateTracker';
import Filter from './components/Filter';
import { getChipStyles } from './service';
import Members from './components/Members';

type BoardBarViewProps = {
  board: Board;
};

function BoardBarView({ board }: BoardBarViewProps) {
  const theme = useTheme<CustomThemeOptions>();
  const { mode } = useColorScheme();
  const { isBoardAdmin } = useAuthorized();
  const chipStyles = getChipStyles(mode);

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
          <Chip icon={<DashboardIcon />} label={board?.title} clickable sx={chipStyles} />
          <Filter />
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
