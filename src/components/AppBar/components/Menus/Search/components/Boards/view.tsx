import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, List, Typography } from '@/components/UIElements';
import { Board } from '@/types/board.type';
import ResultItem from '../ResultItem';

type BoardsViewProps = {
  boards: Board[] | undefined;
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
            startIcon={<DashboardIcon />}
            primaryText={board.name}
            onClick={() => onViewBoard(board._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default BoardsView;
