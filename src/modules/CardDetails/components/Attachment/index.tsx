import { useDeleteAttachmentMutation } from '@/redux/services/card/attachment';
import AttachmentView from './view';

function Attachment() {
  const [deleteAttachment] = useDeleteAttachmentMutation();

  const handleDelete = (params: string[], onSuccess: () => void) => {
    const [attachmentId, cardId, boardId] = params;
    deleteAttachment({
      attachmentId,
      cardId,
      boardId,
      onSuccess,
    });
  };

  return <AttachmentView onDelete={handleDelete} />;
}

export default Attachment;
