import Link from 'next/link';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useColorScheme } from '@mui/material';
import { useCreateWorkspace } from '@/hooks';
import TrelloIcon from '@/common/assets/icons/trello.svg';
import { useCustomTheme } from '@/common/styles/theme';
import Workspaces from './components/Menus/Workspaces';
import ModeSelect from './components/Menus/ModeSelect';
import Profiles from './components/Menus/Profiles';
import Notification from './components/Menus/Notification';
import Search from './components/Menus/Search';

function AppBarView() {
  const { renderCreateWorkspaceModal, handleShowCreateModal } = useCreateWorkspace();
  const customTheme = useCustomTheme();
  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? customTheme.colorSchemes?.dark?.palette?.text?.primary : 'white';

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: customTheme.customProps.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          gap: 2,
          overflowX: 'auto',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? customTheme.colors.bgDark : customTheme.colors.bgBlueDark,
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
                Tasky
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
      {renderCreateWorkspaceModal()}
    </>
  );
}

export default AppBarView;
