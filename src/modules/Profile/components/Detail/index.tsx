'use client';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import ProfileDetailsView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserProfileFormSchema, UserProfileFormValues } from './validation';
import { getUser } from '@/services/user';
import { filterChangedFormFields } from '@/utils/form';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
import { useUpdateProfileMutation } from '@/redux/services/user/user';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function ProfileDetails() {
  const user = useAppSelector(selectUserProfile);
  const methods = useForm({
    resolver: yupResolver(UserProfileFormSchema),
    defaultValues: async () => {
      const {
        data: { user },
      } = await getUser({ accessToken: Cookies.get('token') || '' });
      return {
        name: user?.name || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        birthday: user?.birthday || new Date().toISOString(),
      };
    },
  });
  const [updateProfile] = useUpdateProfileMutation();

  const {
    reset,
    getValues,
    formState: { isSubmitSuccessful, dirtyFields },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(getValues());
      toast.success('Edited profile successfully');
    }
  }, [isSubmitSuccessful, getValues, reset]);

  const handleSubmit = (values: UserProfileFormValues) => {
    const changedFormValues = filterChangedFormFields(values, dirtyFields);
    updateProfile({ ...changedFormValues, userId: user?._id || '' });
  };

  return <ProfileDetailsView methods={methods} onSubmit={handleSubmit} />;
}

export default ProfileDetails;
