import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Please enter email'),
  password: Yup.string().min(6, 'Password must be at least 6 digits').required('Please select workspace'),
});

export const defaultValues = {
  email: '',
  password: '',
};
