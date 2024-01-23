'use client';
import { useRouter } from 'next/navigation';
import { isEmpty } from 'lodash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
import BoardItem from './components/BoardItem';
import CreateBoard from './components/CreateBoard';
import { Board } from '@/types/board.type';
import { Workspace } from '@/types/workspace.type';

type SectionsViewProps = {
  ownerBoards: Partial<Board>[];
  otherBoards: Partial<Board>[];
  workspace: Partial<Workspace>;
};

function SectionsView({ ownerBoards, otherBoards, workspace }: SectionsViewProps) {
  const router = useRouter();
  const user = useAppSelector(selectUserProfile);

  const canViewBoard = (board: Partial<Board>) => {
    return board.members?.some((member) => member._id === user?._id);
  };

  const handleViewBoard = (board: Partial<Board>) => {
    if (!canViewBoard(board)) return;
    router.push(`/boards/${board._id}`);
  };

  const renderSection = (title: string, boards: Partial<Board>[]) => {
    if (boards.length === 0) return;
    return (
      <Box sx={{ mb: 6 }}>
        {renderSectionTitle(title)}
        {renderBoards(boards)}
      </Box>
    );
  };

  const renderSectionTitle = (title: string) => {
    return (
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <PersonOutlinedIcon sx={{ opacity: '0.75' }} />
        <Typography sx={{ fontSize: '1rem !important', fontWeight: 'bold' }}>{title}</Typography>
      </Stack>
    );
  };

  const renderBoards = (boards: Partial<Board>[]) => {
    return (
      <Grid container spacing={2}>
        {boards.map((board) => (
          <Grid item key={board._id}>
            <Tooltip title={!canViewBoard(board) && 'You need to be a member to view this board'} arrow placement="top">
              <div>
                <BoardItem
                  sx={{
                    bgcolor: '#ae4d7b',
                    padding: 1,
                    fontWeight: 'bold',
                    color: 'white',
                    cursor: canViewBoard(board) ? 'pointer' : 'unset',
                    opacity: canViewBoard(board) ? '1' : '0.5',
                    ':hover': {
                      opacity: canViewBoard(board) ? '0.8' : '0.5',
                    },
                  }}
                  onClick={() => handleViewBoard(board)}
                >
                  {board.name}
                </BoardItem>
              </div>
            </Tooltip>
          </Grid>
        ))}
        <Grid item>
          <CreateBoard />
        </Grid>
      </Grid>
    );
  };

  if (isEmpty(workspace)) {
    return (
      <Box sx={{ ml: 2, my: 4 }}>
        <Skeleton variant="rounded" width={200} height={20} />
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[...Array(2)].map((_, index) => (
            <Grid item key={index}>
              <Skeleton variant="rounded" width={190} height={96} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ ml: 2, my: 4 }}>
      {ownerBoards.length === 0 ? (
        <Box sx={{ mb: 6 }}>
          {renderSectionTitle('Your boards')}
          <CreateBoard />
        </Box>
      ) : (
        renderSection('Your boards', ownerBoards)
      )}
      {renderSection('All boards in this Workspace', otherBoards)}
    </Box>
  );
}

export default SectionsView;
