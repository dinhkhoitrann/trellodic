import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
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

type BoardBarViewProps = {
  board: Board;
};

function BoardBarView({ board }: BoardBarViewProps) {
  const theme = useTheme<CustomThemeOptions>();
  const { mode } = useColorScheme();
  const { isBoardAdmin } = useAuthorized();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';
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
          <Chip
            icon={<VpnLockIcon />}
            label={board?.type}
            clickable
            sx={chipStyles}
            style={{ textTransform: 'capitalize' }}
          />
          <Chip icon={<AddToDriveIcon />} label="Add To Google Drive" clickable sx={chipStyles} />
          <Chip icon={<BoltIcon />} label="Automation" clickable sx={chipStyles} />
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
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': {
                width: '34px',
                height: '34px',
                fontSize: '0.8rem',
                border: 'none',
                color: textColor,
                cursor: 'pointer',
                '&:first-of-type': { bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#546170' : '#a4b0be') },
              },
            }}
          >
            {board.memberIds.map((member) => (
              <Tooltip key={member._id} title={member.name}>
                <Avatar alt={member.name} src={member.avatar} />
              </Tooltip>
            ))}
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
}

export default BoardBarView;
