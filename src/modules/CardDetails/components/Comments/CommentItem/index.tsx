import { Comment } from '@/types/card.type';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { useDeleteCommentMutation, useEditCommentMutation } from '@/redux/services/card/comment';
import CommentItemView from './view';

type CommentItemProps = BoardGlobalProps & {
  comment: Comment;
};

function CommentItem({ comment, cardId, onRefreshCard, onRefreshBoard }: CommentItemProps) {
  const [editComment, { isLoading }] = useEditCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const handleEdit = (commentId: string, content: string, onEditSuccess: () => void) => {
    editComment({
      content,
      commentId,
      cardId,
      onSuccess: () => {
        onEditSuccess();
        onRefreshCard();
      },
    });
  };

  const handleDelete = (commentId: string) => {
    deleteComment({
      commentId,
      cardId,
      onSuccess: () => {
        onRefreshCard();
        onRefreshBoard();
      },
    });
  };

  return <CommentItemView comment={comment} isLoading={isLoading} onEdit={handleEdit} onDelete={handleDelete} />;
}

export default withBoard(CommentItem);
