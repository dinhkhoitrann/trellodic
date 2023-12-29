import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAlert } from '@/hooks';

type MoreOptionsViewProps = {
  onEditMode: () => void;
  onDeleteLabel: () => void;
};

function MoreOptionsView({ onEditMode, onDeleteLabel }: MoreOptionsViewProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  const { renderAlert, handleOpenAlert } = useAlert({
    okText: 'Delete',
    title: 'Delete label?',
    content: 'Are you sure you would like to delete label?',
    onOk: () => {
      handleClose();
      onDeleteLabel();
    },
  });

  const handleShowOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditMode = () => {
    onEditMode();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleShowOptions}>
        <MoreHorizIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEditMode}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleOpenAlert()}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
      {renderAlert()}
    </>
  );
}

export default MoreOptionsView;
