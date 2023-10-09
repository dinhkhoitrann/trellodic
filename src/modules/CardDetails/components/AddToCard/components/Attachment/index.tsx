import { ChangeEvent, useState } from 'react';
import { isInvalidFile } from '@/utils/card';
import { useUploadFilesMutation } from '@/redux/services/card/attachment';
import { BoardGlobalProps, withBoard } from '@/hocs';
import AttachmentView from './view';

function Attachment({ boardId, cardId, onRefreshCard }: BoardGlobalProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFiles, { isLoading }] = useUploadFilesMutation();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    if (!file) return;
    if (isInvalidFile(files, file)) return;

    setFiles((prevState) => [...prevState, file]);
  };

  const handleSaveUploadedFiles = (onSuccess: () => void) => {
    uploadFiles({
      files,
      cardId,
      boardId,
      onSuccess: () => {
        onSuccess();
        handleClear();
        onRefreshCard();
      },
    });
  };

  const handleRemoveFile = (removedFile: File) => {
    setFiles((prevState) => {
      const filteredFiles = prevState.filter((file) => file.name !== removedFile.name);
      return filteredFiles;
    });
  };

  const handleClear = () => {
    setFiles([]);
  };

  return (
    <AttachmentView
      files={files}
      loading={isLoading}
      onUpload={handleFileUpload}
      onSave={handleSaveUploadedFiles}
      onRemoveFile={handleRemoveFile}
      onRemoveAll={handleClear}
    />
  );
}

export default withBoard(Attachment);
