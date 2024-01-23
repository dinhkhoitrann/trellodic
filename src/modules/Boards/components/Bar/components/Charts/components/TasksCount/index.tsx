import { useQuery } from '@tanstack/react-query';
import { getTasksCountByColumn } from '@/services/chart';
import { BoardGlobalProps, withBoard } from '@/hocs';
import TasksCountView from './view';

function TasksCount({ boardId }: BoardGlobalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['TasksCount'],
    queryFn: ({ signal }) => getTasksCountByColumn({ boardId, signal }),
    staleTime: 60000,
  });

  return <TasksCountView dataset={data} isLoading={isLoading} isError={isError} />;
}

export default withBoard(TasksCount);
