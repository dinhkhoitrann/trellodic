import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ITEMS } from './constants';
import Labels from '../Labels';

type ListViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MENUS_CONTENT_MAP = {
  [ITEMS.labels]: Labels,
};

function ListView({ isOpen, onClose }: ListViewProps) {
  const [selectedItem, setSelectedItem] = useState('');
  const SelectedMenuItem = MENUS_CONTENT_MAP[selectedItem];

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  const renderTitle = () => {
    if (selectedItem) {
      return (
        <>
          <IconButton sx={{ width: 'fit-content' }} onClick={() => setSelectedItem('')}>
            <NavigateBeforeIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ textAlign: 'center' }}>{selectedItem}</Typography>
        </>
      );
    }

    return (
      <>
        <span></span>
        <Typography sx={{ textAlign: 'center' }}>Menus</Typography>
      </>
    );
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{
          width: { xs: '100vw', sm: '330px' },
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '32px 1fr 32px',
            alignItems: 'center',
            p: 3,
            pb: 0,
          }}
        >
          {renderTitle()}
          <IconButton onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider sx={{ mt: 2 }} />
        {selectedItem ? (
          <SelectedMenuItem />
        ) : (
          <List sx={{ p: 1 }}>
            <ListItem disablePadding onClick={() => handleSelectItem(ITEMS.labels)}>
              <ListItemButton>
                <ListItemIcon>
                  <LabelOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Labels" />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Box>
    </Drawer>
  );
}

export default ListView;
