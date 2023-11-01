import { useState } from 'react';
import { useTheme } from '@mui/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from '@mui/material/InputAdornment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Workspaces from './Menus/Workspaces';
import Starred from './Menus/Starred';
import CreateWorkspaceModal from '@/modules/Workspace/Sidebar/components/CreateWorkspace';
import ModeSelect from '@/components/ModeSelect';
import TrelloIcon from '@/common/assets/icons/trello.svg';
import { CustomThemeOptions } from '@/common/styles/theme';
import Profiles from './Menus/Profiles';

function AppBarView() {
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme<CustomThemeOptions>();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShowCreateModal = () => {
    setShowCreateModal((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: theme.customProps.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          gap: 2,
          overflowX: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, a: { textDecoration: 'none' } }}>
          <AppsIcon sx={{ color: 'white' }} />
          <Link href="/">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color: 'white' }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}
                color="primary"
              >
                Trellodic
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Starred />
            <Button startIcon={<LibraryAddIcon />} sx={{ color: 'white' }} onClick={handleShowCreateModal}>
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size="small"
            value={searchValue}
            sx={{
              minWidth: '120px',
              maxWidth: '190px',
              '& label': {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
              '& input': {
                color: 'white',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <CloseIcon
                  fontSize="small"
                  sx={{ color: 'white', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')}
                />
              ),
            }}
          />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
      <CreateWorkspaceModal isShowCreateModal={showCreateModal} onClose={handleShowCreateModal} />
    </>
  );
}

export default AppBarView;
