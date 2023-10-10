import Box from '@mui/material/Box';
import CommentEditor from './CommentEditor';
import { BoardGlobalProps, withBoard } from '@/hocs';
import CommentItem from './CommentItem';

function CommentsView({ card }: BoardGlobalProps) {
  return (
    <Box>
      <CommentEditor />
      {card.comments?.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </Box>
  );
}

export default withBoard(CommentsView);
