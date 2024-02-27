import { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import { Avatar, Box, Button, Stack, Typography } from '@/components/UIElements';
import EditorForm from '@/components/Editor/components/Form';
import EditorView from '@/components/Editor/components/View';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
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

  const user = useAppSelector(selectUserProfile);
  const isCommentAuthor = user?._id === comment.author._id;

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

  const renderCommentInEditMode = () => {
    return (
      <>
        <Box sx={{ my: 1 }}>
          <EditorForm data={enteredComment} onDataChange={handleCommentChange} />
        </Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            disabled={enteredComment === ''}
            loading={isLoading}
            sx={{ mt: 2 }}
            onClick={() => onEdit(comment._id, enteredComment, () => setEditMode(false))}
          >
            Save
          </Button>
          <Button onClick={handleCloseEditor}>Cancel</Button>
        </Stack>
      </>
    );
  };

  const renderCommentInViewMode = () => {
    return (
      <>
        <Box sx={{ marginTop: '12px', marginLeft: '12px', marginBottom: '8px' }}>
          <EditorView ref={editorDataRef} />
        </Box>
        {isCommentAuthor && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button onClick={() => setEditMode(true)}>Edit</Button>
            <Button color="error" onClick={handleOpenDeleteAlert}>
              Delete
            </Button>
          </Stack>
        )}
      </>
    );
  };

  return (
    <>
      <Box sx={{ my: '20px' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar src={comment.author.avatar} alt={comment.author.name} sx={{ width: 32, height: 32 }} />
          <Box sx={{ flex: 1 }}>
            <Typography>
              <strong>{comment.author.name}</strong> added a comment -{' '}
              {dayjs(comment.createdAt).format('DD/MM/YYYY HH:mm')}
            </Typography>
          </Box>
        </Stack>
        {editMode ? renderCommentInEditMode() : renderCommentInViewMode()}
      </Box>
      {renderDiscardAlert()}
      {renderDeleteAlert()}
    </>
  );
}

export default CommentItemView;
