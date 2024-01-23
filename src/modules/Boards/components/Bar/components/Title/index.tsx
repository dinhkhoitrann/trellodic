import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { useEditBoardMutation } from '@/redux/services/board/board';
import { BoardTitleSchema, TitleDefaultValues } from './validation';
import TitleView from './view';

function Title({ board }: BoardGlobalProps) {
  const methods = useForm({
    resolver: yupResolver(BoardTitleSchema),
    defaultValues: {
      title: board?.name,
    },
  });
  const { setValue } = methods;

  const [editBoardName, { isLoading, isSuccess }] = useEditBoardMutation();

  useEffect(() => {
    setValue('title', board.name);
  }, [board?.name, setValue]);

  const handleEditTitle = (values: TitleDefaultValues) => {
    const { title } = values;
    editBoardName({ boardId: board._id, name: title });
  };

  return (
    <TitleView board={board} methods={methods} isEditing={isLoading} isSuccess={isSuccess} onSubmit={handleEditTitle} />
  );
}

export default withBoard(Title);
