import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { uploadFile } from '@/services/file';
import { toast } from 'react-toastify';
import CoverView from './view';
import { useEditCardMutation } from '@/redux/services/card/card';
import { BoardGlobalProps, withBoard } from '@/hocs';

function Cover({ cardId, boardId }: BoardGlobalProps) {
  const coverRef = useRef<File>();
  const [image, setImage] = useState<string | ArrayBuffer | null>();

  const [editCover, { isSuccess }] = useEditCardMutation();

  const { mutate: uploadCover, isPending } = useMutation({
    mutationFn: uploadFile,
    onSuccess: (response) => {
      toast.success('Saved cover successfully');
      editCover({ cardId, boardId, cover: response.data.url });
    },
    onError: () => {
      toast.error('Failed to save cover');
    },
  });

  const handleUploadCover = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;

    const selectedImage = event.currentTarget.files[0];
    if (!selectedImage) return;

    coverRef.current = selectedImage;

    const reader = new FileReader();
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSaveCover = () => {
    const formData: any = new FormData();
    formData.append('file', coverRef.current);
    uploadCover({ formData });
  };

  return (
    <CoverView
      image={image}
      isUploading={isPending}
      isSaveSuccess={isSuccess}
      onUpload={handleUploadCover}
      onSaveCover={handleSaveCover}
    />
  );
}

export default withBoard(Cover);
