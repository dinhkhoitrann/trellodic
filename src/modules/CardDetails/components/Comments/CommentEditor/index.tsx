import { BoardGlobalProps, withBoard } from '@/hocs';
import { useCreateCommentMutation } from '@/redux/services/card/comment';
import CommentEditorView from './view';

function CommentEditor({ cardId, onRefreshCard, onRefreshBoard }: BoardGlobalProps) {
  const [addComment, { isLoading }] = useCreateCommentMutation();

  const handleSave = (content: string, onSaveSuccess: () => void) => {
    addComment({
      content,
      cardId,
      onSuccess: () => {
        onSaveSuccess();
        onRefreshCard();
        onRefreshBoard();
      },
    });
  };

  return <CommentEditorView isLoading={isLoading} onSave={handleSave} />;
}

export default withBoard(CommentEditor);
