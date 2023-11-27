import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { BoardResult } from '@/types/search.type';
import ResultItem from '../ResultItem';

type BoardsViewProps = {
  boards: BoardResult[] | undefined;
  onViewBoard: (_boardId: string) => void;
};

function BoardsView({ boards, onViewBoard }: BoardsViewProps) {
  if (!boards || boards.length === 0) {
    return;
  }

  return (
    <Box>
      <Typography sx={{ fontSize: '12px !important', fontWeight: '600', mt: 2, ml: 2 }}>BOARDS</Typography>
      <List sx={{ width: '100%' }}>
        {boards.map((board) => (
          <ResultItem
            key={board._id}
            startIcon={
              board.boardCover ? (
                <Image
                  src={board.boardCover}
                  width={24}
                  height={24}
                  style={{ borderRadius: '4px' }}
                  alt="Board cover"
                />
              ) : (
                <DashboardIcon />
              )
            }
            primaryText={board.boardTitle}
            secondaryText={board.workspaceTitle}
            onClick={() => onViewBoard(board._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default BoardsView;
