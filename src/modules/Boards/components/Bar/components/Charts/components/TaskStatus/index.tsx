import { useQuery } from '@tanstack/react-query';
import { getTaskStatusChartData } from '@/services/chart';
import { BoardGlobalProps, withBoard } from '@/hocs';
import TaskStatusChartView from './view';

function TaskStatusChart({ boardId }: BoardGlobalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['TaskStatusChart'],
    queryFn: ({ signal }) => getTaskStatusChartData({ boardId, signal }),
    staleTime: 0,
    gcTime: 0,
  });

  return <TaskStatusChartView dataset={data} isLoading={isLoading} isError={isError} />;
}

export default withBoard(TaskStatusChart);
