import { ChangeEvent, useState } from 'react';
import AttachmentView from './view';
import { isInvalidFile } from '@/utils/card';

function Attachment() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];
    if (!file) return;
    if (isInvalidFile(files, file)) return;

    setFiles((prevState) => [...prevState, file]);
  };

  const handleSaveUploadedFiles = () => {
    console.log(files);
  };

  const handleRemoveFile = (removedFile: File) => {
    setFiles((prevState) => {
      const filteredFiles = prevState.filter((file) => file.name !== removedFile.name);
      return filteredFiles;
    });
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  return (
    <AttachmentView
      files={files}
      onUpload={handleFileUpload}
      onSave={handleSaveUploadedFiles}
      onRemoveFile={handleRemoveFile}
      onRemoveAll={handleRemoveAll}
    />
  );
}

export default Attachment;
