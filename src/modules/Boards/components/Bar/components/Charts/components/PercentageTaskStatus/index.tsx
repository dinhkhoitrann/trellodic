import { useQuery } from '@tanstack/react-query';
import { getPercentageTaskStatus } from '@/services/chart';
import { BoardGlobalProps, withBoard } from '@/hocs';
import PercentageTaskStatusView from './view';

function PercentageTaskStatus({ boardId }: BoardGlobalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['PercentageTaskStatus'],
    queryFn: ({ signal }) => getPercentageTaskStatus({ boardId, signal }),
    staleTime: 0,
    gcTime: 0,
  });

  return <PercentageTaskStatusView data={data} isLoading={isLoading} isError={isError} />;
}

export default withBoard(PercentageTaskStatus);
