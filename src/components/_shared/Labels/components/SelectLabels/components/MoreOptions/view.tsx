import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Menu, MenuItem, IconButton, ListItem } from '@/components/UIElements';
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
          <ListItem.Icon>
            <EditIcon fontSize="small" />
          </ListItem.Icon>
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleOpenAlert()}>
          <ListItem.Icon>
            <DeleteIcon fontSize="small" />
          </ListItem.Icon>
          Delete
        </MenuItem>
      </Menu>
      {renderAlert()}
    </>
  );
}

export default MoreOptionsView;
