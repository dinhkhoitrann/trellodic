'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BoardItem from './components/BoardItem';
import Link from 'next/link';
import CreateBoard from './components/CreateBoard';
import { Board } from '@/types/board.type';

type SectionsViewProps = {
  ownerBoards: Partial<Board>[];
  otherBoards: Partial<Board>[];
};

function SectionsView({ ownerBoards, otherBoards }: SectionsViewProps) {
  const renderSection = (title: string, boards: Partial<Board>[]) => {
    return (
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <PersonOutlinedIcon sx={{ opacity: '0.75' }} />
          <Typography sx={{ fontSize: '1rem !important', fontWeight: 'bold' }}>{title}</Typography>
        </Stack>
        <Grid container spacing={2}>
          {boards.map((board) => (
            <Grid item key={board._id}>
              <Link href={`/boards/${board._id}`}>
                <BoardItem
                  sx={{
                    bgcolor: '#ae4d7b',
                    padding: 1,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  {board.title}
                </BoardItem>
              </Link>
            </Grid>
          ))}
          <Grid item>
            <CreateBoard />
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box sx={{ ml: 2, my: 4 }}>
      {renderSection('Your boards', ownerBoards)}
      {renderSection('All boards in this Workspace', otherBoards)}
    </Box>
  );
}

export default SectionsView;
