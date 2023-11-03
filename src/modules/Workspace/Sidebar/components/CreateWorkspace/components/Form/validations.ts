import * as Yup from 'yup';

export const CreateWorkspaceSchema = Yup.object().shape({
  name: Yup.string().required('Please enter workspace name'),
});

export const defaultValues = {
  name: '',
};
