import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateWorkspaceMutation } from '@/redux/services/workspace/workspace';
import { CreateWorkspaceSchema, defaultValues } from './validations';
import CreateFormView from './view';

type CreateFormProps = {
  onCreateSuccess: () => void;
};

function CreateForm({ onCreateSuccess }: CreateFormProps) {
  const methods = useForm({
    resolver: yupResolver(CreateWorkspaceSchema),
    defaultValues,
  });
  const [createWorkspace, { isLoading }] = useCreateWorkspaceMutation();

  const handleSubmit = (values: { name: string }) => {
    createWorkspace({ name: values.name, onSuccess: onCreateSuccess });
  };

  return <CreateFormView methods={methods} isCreating={isLoading} onSubmit={handleSubmit} />;
}

export default CreateForm;
