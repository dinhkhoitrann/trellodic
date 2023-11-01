import * as Yup from 'yup';

export interface ResetPasswordDefaultValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 digits').required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .test('confirmPassword', 'Confirm password is invalid', function (confirmPassword) {
      const { password } = this.parent;
      return password === confirmPassword;
    }),
});

export const defaultValues: ResetPasswordDefaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
};
