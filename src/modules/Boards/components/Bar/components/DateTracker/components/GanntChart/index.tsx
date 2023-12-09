import { useQuery } from '@tanstack/react-query';
import { getBoardTimeline } from '@/services/timeline';
import { BoardGlobalProps, withBoard } from '@/hocs';
import GanntChartView from './view';

function GanntChart({ boardId }: BoardGlobalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['GanntChart'],
    queryFn: () => getBoardTimeline({ boardId }),
    staleTime: 5 * 60000,
    gcTime: 5 * 60000,
    refetchOnMount: true,
  });

  return <GanntChartView data={data} isLoading={isLoading} isError={isError} />;
}

export default withBoard(GanntChart);
