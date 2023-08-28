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
import { Theme } from '@/common/enums';

const CHIP_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

function BoardBarView() {
  const theme = useTheme<CustomThemeOptions>();

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
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#34495e' : '#1976d2'),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label="TranDinhKhoi Board" clickable sx={CHIP_STYLES} />
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable sx={CHIP_STYLES} />
        <Chip icon={<AddToDriveIcon />} label="Add To Google Drive" clickable sx={CHIP_STYLES} />
        <Chip icon={<BoltIcon />} label="Automation" clickable sx={CHIP_STYLES} />
        <Chip icon={<FilterListIcon />} label="Filter" clickable sx={CHIP_STYLES} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{ '& .MuiAvatar-root': { width: '34px', height: '34px', fontSize: '0.8rem', border: 'none' } }}
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
