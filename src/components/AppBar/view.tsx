import { useState } from 'react';
import { useTheme } from '@mui/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Workspaces from './components/Menus/Workspaces';
import CreateWorkspaceModal from '@/modules/Workspace/components/Sidebar/components/CreateWorkspace';
import ModeSelect from './components/Menus/ModeSelect';
import TrelloIcon from '@/common/assets/icons/trello.svg';
import { CustomThemeOptions } from '@/common/styles/theme';
import Profiles from './components/Menus/Profiles';
import { useColorScheme } from '@mui/material';
import Notification from './components/Menus/Notification';

function AppBarView() {
  const [searchValue, setSearchValue] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const theme = useTheme<CustomThemeOptions>();
  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';

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
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24272b' : '#1565c0'),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: textColor }} />
          <Link href="/">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color: textColor }} />
              <Typography
                variant="caption"
                sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: textColor }}
                color="primary"
              >
                Trellodic
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Button startIcon={<LibraryAddIcon />} sx={{ color: textColor }} onClick={handleShowCreateModal}>
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
                color: textColor,
                '&.Mui-focused': {
                  color: textColor,
                },
              },
              '& input': {
                color: textColor,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: textColor,
                },
                '&:hover fieldset': {
                  borderColor: textColor,
                },
                '&.Mui-focused fieldset': {
                  borderColor: textColor,
                },
              },
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: textColor }} />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <CloseIcon
                  fontSize="small"
                  sx={{ color: textColor, cursor: 'pointer' }}
                  onClick={() => setSearchValue('')}
                />
              ),
            }}
          />
          <ModeSelect />
          <Notification />
          <Profiles />
        </Box>
      </Box>
      <CreateWorkspaceModal isShowCreateModal={showCreateModal} onClose={handleShowCreateModal} />
    </>
  );
}

export default AppBarView;
