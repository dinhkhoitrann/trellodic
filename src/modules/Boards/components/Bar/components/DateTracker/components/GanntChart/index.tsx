import { useQuery } from '@tanstack/react-query';
import { getBoardTimeline } from '@/services/timeline';
import { BoardGlobalProps, withBoard } from '@/hocs';
import GanntChartView from './view';
import { mapDataChart } from './service';

function GanntChart({ boardId }: BoardGlobalProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['GanntChart_Board'],
    queryFn: ({ signal }) => getBoardTimeline({ boardId, signal }),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
  });
  const mappedData = mapDataChart(data);

  return <GanntChartView data={mappedData} originData={data} isLoading={isLoading} isError={isError} />;
}

export default withBoard(GanntChart);
