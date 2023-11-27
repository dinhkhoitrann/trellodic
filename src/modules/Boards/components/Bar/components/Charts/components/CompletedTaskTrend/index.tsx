import { useQuery } from '@tanstack/react-query';
import CompletedTaskTrendView from './view';
import { getCompletedTaskTrendByMonth } from '@/services/chart';

function CompletedTaskTrend() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['CompletedTaskTrend'],
    queryFn: getCompletedTaskTrendByMonth,
    staleTime: 60000,
  });

  return <CompletedTaskTrendView data={data} isLoading={isLoading} isError={isError} />;
}

export default CompletedTaskTrend;
