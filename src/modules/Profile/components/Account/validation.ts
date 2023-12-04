import * as Yup from 'yup';

export interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const ChangePasswordFormSchema = Yup.object().shape({
  currentPassword: Yup.string().min(6, 'Password must be at least 6 digits').required('Password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .test('newPassword', 'New password must not be the same as current password', function (newPassword) {
      const { currentPassword } = this.parent;
      return currentPassword !== newPassword;
    }),
  confirmNewPassword: Yup.string()
    .required('Confirm new password is required')
    .test('confirmNewPassword', 'Confirm new password is incorrect', function (confirmNewPassword) {
      const { newPassword } = this.parent;
      return newPassword === confirmNewPassword;
    }),
});
