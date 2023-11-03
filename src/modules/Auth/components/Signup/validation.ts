import * as Yup from 'yup';
import dayjs from 'dayjs';

export interface SignupDefaultValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  birthday: Date;
}

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  name: Yup.string().trim().required('Name is required'),
  password: Yup.string().min(6, 'Password must be at least 6 digits').required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .test('confirmPassword', 'Confirm password is invalid', function (confirmPassword) {
      const { password } = this.parent;
      return password === confirmPassword;
    }),
  phoneNumber: Yup.string()
    .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Phone number is invalid')
    .required('Phone number is required'),
  birthday: Yup.date().required('Date of birth is required').max(new Date(), 'Date of birth must be in the past'),
});

export const defaultValues: SignupDefaultValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  birthday: dayjs(Date.now()).toDate(),
};
