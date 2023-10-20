import { useForm } from 'react-hook-form';
import CreateFormView from './view';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateWorkspaceSchema, defaultValues } from './validations';

function CreateForm() {
  const methods = useForm({
    resolver: yupResolver(CreateWorkspaceSchema),
    defaultValues,
  });
  const handleSubmit = (values: { name: string }) => {
    console.log(values);
  };

  return <CreateFormView methods={methods} onSubmit={handleSubmit} />;
}

export default CreateForm;
