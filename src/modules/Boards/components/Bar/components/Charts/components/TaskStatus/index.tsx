import { useQuery } from '@tanstack/react-query';
import { getTaskStatusChartData } from '@/services/chart';
import TaskStatusChartView from './view';

function TaskStatusChart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['TaskStatusChart'],
    queryFn: getTaskStatusChartData,
    staleTime: 60000,
  });

  return <TaskStatusChartView dataset={data} isLoading={isLoading} isError={isError} />;
}

export default TaskStatusChart;
