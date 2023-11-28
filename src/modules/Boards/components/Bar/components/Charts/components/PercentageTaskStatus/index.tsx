import { useQuery } from '@tanstack/react-query';
import { getPercentageTaskStatus } from '@/services/chart';
import PercentageTaskStatusView from './view';

function PercentageTaskStatus() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['PercentageTaskStatus'],
    queryFn: getPercentageTaskStatus,
    staleTime: 60000,
  });

  return <PercentageTaskStatusView data={data} isLoading={isLoading} isError={isError} />;
}

export default PercentageTaskStatus;
