import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateBoardMutation } from '@/redux/services/workspace/workspace';
import { Workspace } from '@/types/workspace.type';
import CreateFormView from './view';
import { CreateBoardSchema, defaultValues } from './validation';

type CreateFormProps = {
  onClose: () => void;
};

function CreateForm(props: CreateFormProps) {
  const methods = useForm({
    resolver: yupResolver(CreateBoardSchema),
    defaultValues: defaultValues,
  });
  const [createBoard, { isLoading }] = useCreateBoardMutation();
  const router = useRouter();

  const onSubmit = (values: { name: string; workspace: Workspace }) => {
    const onSuccess = (boardId: string) => {
      router.push(`/boards/${boardId}`);
    };

    createBoard({ name: values.name, workspaceId: values.workspace._id, onSuccess });
  };

  return <CreateFormView {...props} methods={methods} isLoading={isLoading} onSubmit={onSubmit} />;
}

export default CreateForm;
