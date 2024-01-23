import { Box } from '@/components/UIElements';
import { BoardGlobalProps, withBoard } from '@/hocs';
import CommentEditor from './CommentEditor';
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
