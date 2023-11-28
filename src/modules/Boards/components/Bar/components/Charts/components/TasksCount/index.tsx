import { useQuery } from '@tanstack/react-query';
import { getTasksCountByColumn } from '@/services/chart';
import TasksCountView from './view';

function TasksCount() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['TasksCount'],
    queryFn: getTasksCountByColumn,
    staleTime: 60000,
  });

  return <TasksCountView dataset={data} isLoading={isLoading} isError={isError} />;
}

export default TasksCount;
