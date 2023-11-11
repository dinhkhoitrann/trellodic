import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useTheme } from '@mui/styles';
import { CustomThemeOptions } from '@/common/styles/theme';
import { Board } from '@/types/board.type';
import { useColorScheme } from '@mui/material';

const CHIP_STYLES = {
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

type BoardBarViewProps = {
  board: Board;
};

function BoardBarView({ board }: BoardBarViewProps) {
  const theme = useTheme<CustomThemeOptions>();
  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';
  const chipStyles = {
    ...CHIP_STYLES,
    color: textColor,
    '.MuiSvgIcon-root': {
      color: textColor,
    },
  };

  return (
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
        <Chip icon={<FilterListIcon />} label="Filter" clickable sx={chipStyles} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{ color: textColor, borderColor: textColor, '&:hover': { borderColor: textColor } }}
        >
          Invite
        </Button>
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
          <Tooltip title="Tran Dinh Khoi">
            <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
          </Tooltip>
          <Tooltip title="Tran Dinh Khoi">
            <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
          </Tooltip>
          <Tooltip title="Tran Dinh Khoi">
            <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
          </Tooltip>
          <Tooltip title="Tran Dinh Khoi">
            <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
          </Tooltip>
          <Tooltip title="Tran Dinh Khoi">
            <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBarView;
