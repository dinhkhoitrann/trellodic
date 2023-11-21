import { useState } from 'react';
import { useTheme } from '@mui/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useColorScheme } from '@mui/material';
import CreateWorkspaceModal from '@/modules/Workspace/components/Sidebar/components/CreateWorkspace';
import TrelloIcon from '@/common/assets/icons/trello.svg';
import { CustomThemeOptions } from '@/common/styles/theme';
import Workspaces from './components/Menus/Workspaces';
import ModeSelect from './components/Menus/ModeSelect';
import Profiles from './components/Menus/Profiles';
import Notification from './components/Menus/Notification';
import Search from './components/Menus/Search';

function AppBarView() {
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
          <Search />
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
