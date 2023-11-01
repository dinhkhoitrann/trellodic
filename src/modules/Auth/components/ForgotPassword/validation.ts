import * as Yup from 'yup';

export interface ForgotPasswordDefaultValues {
  email: string;
}

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

export const defaultValues: ForgotPasswordDefaultValues = {
  email: '',
};
