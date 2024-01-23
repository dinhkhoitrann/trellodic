'use client';
import { useState } from 'react';
import ProfilePhotoView from './view';
import { useMutation } from '@tanstack/react-query';
import { useUpdateProfileMutation } from '@/redux/services/user/user';
import { uploadFile } from '@/services/file';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';

function ProfilePhoto() {
  const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>();
  const [avatar, setAvatar] = useState<File>();
  const [updateProfile] = useUpdateProfileMutation();
  const user = useAppSelector(selectUserProfile);
  const { mutate: updateAvatar, isPending } = useMutation({
    mutationFn: uploadFile,
    onSuccess: (response) => {
      updateProfile({ avatar: response.data.url, userId: user?._id || '' });
      setUploadedImage(null);
      toast.success('Saved avatar successfully');
    },
    onError: () => {
      toast.error('Failed to save avatar');
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFile = event.target.files[0];
    if (!selectedFile) return;
    setAvatar(selectedFile);

    const reader = new FileReader();
    reader.onload = function () {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSaveAvatar = () => {
    const formData: any = new FormData();
    formData.append('file', avatar);
    updateAvatar({ formData });
  };

  return (
    <ProfilePhotoView
      uploadedImage={uploadedImage}
      isLoading={isPending}
      onUpload={handleFileUpload}
      onSaveAvatar={handleSaveAvatar}
    />
  );
}

export default ProfilePhoto;
