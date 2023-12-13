import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormView from './view';
import { useLazyFilterBoardQuery } from '@/redux/services/board/filter';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { FilterDefaultValues, FilterSchema, defaultValues } from './validation';

type FormProps = BoardGlobalProps & {
  isOpen: boolean;
  onClose: () => void;
};

function Form({ boardId, isOpen, onClose }: FormProps) {
  const methods = useForm({
    resolver: yupResolver(FilterSchema),
    defaultValues,
  });
  const [filterBoard] = useLazyFilterBoardQuery();

  const handleSubmit = (values: FilterDefaultValues) => {
    onClose();
    filterBoard({ ...values, boardId });
  };

  return <FormView isOpen={isOpen} onClose={onClose} methods={methods} onSubmit={handleSubmit} />;
}

export default withBoard(Form);
