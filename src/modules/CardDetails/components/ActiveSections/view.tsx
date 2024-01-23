import { useState } from 'react';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Grid, Stack, Typography } from '@/components/UIElements';
import { withBoard, BoardGlobalProps } from '@/hocs';
import Members from '../Members';
import Labels from '../Labels';
import Dates from '../Dates';
import Skills from '../Skills';
import EditCardTitle from './components/EditCardTitle';

function ActiveSectionsView({ card, boardId }: BoardGlobalProps) {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LaptopIcon />
        {editMode ? (
          <EditCardTitle currentTitle={card.title || ''} cardId={card._id} boardId={boardId} onClose={handleEditMode} />
        ) : (
          <Typography
            variant="h6"
            component="span"
            sx={{ textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'pointer' }}
            onClick={handleEditMode}
          >
            {card?.title}
          </Typography>
        )}
      </Stack>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        {!!card.members?.length && (
          <Grid item>
            <Members />
          </Grid>
        )}
        {!!card.labels?.length && (
          <Grid item>
            <Labels />
          </Grid>
        )}
        {card.endDate && (
          <Grid item>
            <Dates />
          </Grid>
        )}
        {!!card.skills?.length && (
          <Grid item>
            <Skills />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default withBoard(ActiveSectionsView);
