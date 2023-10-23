import * as Yup from 'yup';

export const CreateBoardSchema = Yup.object().shape({
  name: Yup.string().required('Please enter board name'),
  workspace: Yup.object().typeError('Please select workspace').required('Please select workspace'),
});

export const defaultValues = {
  name: '',
  workspace: '',
};
