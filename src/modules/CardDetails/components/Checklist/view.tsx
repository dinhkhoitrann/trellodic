import { useState, useRef, ChangeEvent } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checklist, ChecklistItem } from '@/types/card.type';
import LinearProgressWithLabel from './components/LinearProgress';
import { useAlert } from '@/hooks';
import EditCLName from './components/EditCLName';
import ChecklistItemLabel from './components/ChecklistItemLabel';

type ChecklistViewProps = {
  checklist: Checklist;
  items: ChecklistItem[];
  progress?: number;
  onItemDone: (_event: ChangeEvent<HTMLInputElement>) => void;
  onAdd: (_title: string) => void;
  onDeleteItem: (_params: any[]) => void;
  onDeleteChecklist: (_checklistId: string) => void;
};

function ChecklistView({
  checklist,
  items,
  progress,
  onItemDone,
  onAdd,
  onDeleteItem,
  onDeleteChecklist,
}: ChecklistViewProps) {
  const [addItemMode, setAddItemMode] = useState(false);
  const [editChecklistMode, setEditChecklistMode] = useState(false);
  const titleRef = useRef<HTMLInputElement>();

  const { renderAlert: renderAlertForItem, handleOpenAlert: handleOpenAlertForItem } = useAlert({
    title: 'Delete this item?',
    content: 'You can not undo when delete it',
    onOk: onDeleteItem,
  });

  const { renderAlert: renderAlertForChecklist, handleOpenAlert: handleOpenAlertForChecklist } = useAlert({
    title: 'Delete this checklist?',
    content: 'The checklist and all its items will be removed',
    onOk: () => onDeleteChecklist(checklist._id),
  });

  const handleShowHideTextField = () => {
    setAddItemMode(!addItemMode);
  };

  const handleAddItem = () => {
    if (!titleRef.current) return;

    if (!titleRef.current.value) {
      titleRef.current.focus();
      return;
    }

    onAdd(titleRef.current.value);
    titleRef.current.value = '';
    titleRef.current.focus();
  };

  const handleShowHideEditCLNameForm = () => {
    setEditChecklistMode(!editChecklistMode);
  };

  return (
    <>
      <Box sx={{ mt: 6 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flex: 1 }}>
            <ChecklistIcon />
            {editChecklistMode ? (
              <EditCLName
                checklistId={checklist._id}
                currentName={checklist?.name}
                onClose={handleShowHideEditCLNameForm}
              />
            ) : (
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: '1rem', textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'pointer' }}
                onClick={handleShowHideEditCLNameForm}
              >
                {checklist?.name}
              </Typography>
            )}
          </Stack>
          <Button onClick={handleOpenAlertForChecklist}>Delete</Button>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <LinearProgressWithLabel value={progress || 0} />
          <FormControl sx={{ my: 3, mx: 2 }} fullWidth component="fieldset" variant="standard">
            <FormGroup>
              {items.map((item) => (
                <Stack
                  key={item._id}
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    px: 2,
                    borderRadius: '8px',
                    '&:hover': {
                      bgcolor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[300] : '#A1BDD914'),
                    },
                  }}
                >
                  <Checkbox name={item._id} checked={item.isDone} sx={{ mr: 2 }} onChange={onItemDone} />
                  <ChecklistItemLabel item={item} checklistId={checklist._id} />
                  <IconButton onClick={() => handleOpenAlertForItem(item._id, 222)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              ))}
            </FormGroup>
          </FormControl>

          {!addItemMode && <Button onClick={handleShowHideTextField}>Add an item</Button>}
          {addItemMode && (
            <Box>
              <TextField inputRef={titleRef} fullWidth autoFocus size="small" placeholder="Add an item" />
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleAddItem}>
                  Add
                </Button>
                <Button
                  sx={{
                    color: (theme) => (theme.palette.mode === 'dark' ? '#B6C2CF' : 'grey'),
                  }}
                  onClick={handleShowHideTextField}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
      {renderAlertForItem()}
      {renderAlertForChecklist()}
    </>
  );
}

export default ChecklistView;
