import { useDeleteAttachmentMutation } from '@/redux/services/card/attachment';
import AttachmentView from './view';

function Attachment() {
  const [deleteAttachment] = useDeleteAttachmentMutation();

  const handleDelete = (params: string[], onSuccess: () => void, onFailed: (_errMsg: string) => void) => {
    const [attachmentId, cardId, boardId] = params;
    deleteAttachment({
      attachmentId,
      cardId,
      boardId,
      onSuccess,
      onFailed,
    });
  };

  return <AttachmentView onDelete={handleDelete} />;
}

export default Attachment;
