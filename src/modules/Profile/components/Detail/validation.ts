import * as Yup from 'yup';

export interface UserProfileFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
}

export const UserProfileFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Please enter email'),
  phoneNumber: Yup.string()
    .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Phone number is invalid')
    .required('Phone number is required'),
  birthday: Yup.string().required('Date of birth is required'),
});

export const defaultValues = {
  name: '',
  email: '',
  birthday: new Date(),
  phoneNumber: '',
};
