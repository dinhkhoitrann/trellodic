import Box from '@mui/material/Box';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';

function CommentsView() {
  return (
    <Box>
      <CommentEditor />
      <CommentList />
    </Box>
  );
}

export default CommentsView;
