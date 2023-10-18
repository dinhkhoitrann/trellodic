import { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Editor from '@/components/Editor';
import { Comment } from '@/types/card.type';
import { useAlert } from '@/hooks';

type CommentItemViewProps = {
  comment: Comment;
  isLoading: boolean;
  onEdit: (_commentId: string, _content: string, _onEditSuccess: () => void) => void;
  onDelete: (_commentId: string) => void;
};

function CommentItemView({ comment, isLoading, onEdit, onDelete }: CommentItemViewProps) {
  const [editMode, setEditMode] = useState(false);
  const [enteredComment, setEnteredComment] = useState(comment.content);
  const editorDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editMode && editorDataRef.current) {
      editorDataRef.current.innerHTML = enteredComment;
    }
  }, [editMode, enteredComment]);

  const handleCommentChange = (content: string) => {
    setEnteredComment(content);
  };

  const handleClear = () => {
    setEditMode(false);
    setEnteredComment(comment.content);
  };

  const handleCloseEditor = () => {
    if (enteredComment !== comment.content) {
      handleOpenDiscardAlert();
    } else {
      setEditMode(false);
    }
  };

  const { renderAlert: renderDiscardAlert, handleOpenAlert: handleOpenDiscardAlert } = useAlert({
    title: 'Discard changes?',
    content: "Your comment will be lost if you don't save it",
    okText: 'Discard',
    onOk: handleClear,
  });

  const { renderAlert: renderDeleteAlert, handleOpenAlert: handleOpenDeleteAlert } = useAlert({
    title: 'Delete this comment?',
    content: 'Your comment will be lost and you can not get it back',
    okText: 'Delete',
    onOk: () => {
      onDelete(comment._id);
    },
  });

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Stack direction="row" alignItems="flex-start" spacing={1}>
          <Avatar src={comment.avatarUrl} alt={comment.username} />
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography sx={{ fontWeight: 'bold' }}>{comment.username}</Typography>
              <Typography variant="caption">{dayjs(comment.createdAt).format('DD-MM-YYYY HH:mm')}</Typography>
            </Stack>
            {editMode ? (
              <>
                <Box sx={{ my: 1 }}>
                  <Editor data={enteredComment} onDataChange={handleCommentChange} />
                </Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    disabled={enteredComment === '' || isLoading}
                    sx={{ mt: 2 }}
                    onClick={() => onEdit(comment._id, enteredComment, () => setEditMode(false))}
                  >
                    {isLoading ? 'Saving' : 'Save'}
                  </Button>
                  <Button onClick={handleCloseEditor}>Cancel</Button>
                </Stack>
              </>
            ) : (
              <>
                <Card
                  sx={{
                    my: 1,
                    '.MuiCardContent-root:last-child': {
                      pb: 2,
                    },
                  }}
                >
                  <CardContent>
                    <Box ref={editorDataRef} />
                  </CardContent>
                </Card>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button onClick={() => setEditMode(true)}>Edit</Button>
                  <Button color="error" onClick={handleOpenDeleteAlert}>
                    Delete
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Stack>
      </Box>
      {renderDiscardAlert()}
      {renderDeleteAlert()}
    </>
  );
}

export default CommentItemView;
