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

const CHIP_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
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
        borderTop: '1px solid #00bfa5',
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
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: '34px', height: '34px', fontSize: '0.8rem' } }}>
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
