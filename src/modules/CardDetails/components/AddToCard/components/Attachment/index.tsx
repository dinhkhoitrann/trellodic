import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useUploadFilesMutation } from '@/redux/services/card/attachment';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { isValidFile } from '@/utils/card';
import AttachmentView from './view';

function Attachment({ cardId, onRefreshCard, onRefreshBoard }: BoardGlobalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadFiles, { isLoading }] = useUploadFilesMutation();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    if (!file) return;
    if (!isValidFile(file, ['pdf', 'doc', 'docx'])) return;
    setFile(file);
  };

  const handleSaveUploadedFiles = (onSuccess: () => void) => {
    const formData: any = new FormData();
    formData.append('file', file);

    uploadFiles({
      formData,
      cardId,
      onSuccess: () => {
        onSuccess();
        handleClearFile();
        onRefreshCard();
        onRefreshBoard();
      },
      onError: () => {
        toast.error('Something went wrong, please try again');
      },
    });
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <AttachmentView
      file={file}
      loading={isLoading}
      onUpload={handleFileUpload}
      onSave={handleSaveUploadedFiles}
      onClearFile={handleClearFile}
    />
  );
}

export default withBoard(Attachment);
