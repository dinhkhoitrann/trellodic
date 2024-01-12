import { useQuery } from '@tanstack/react-query';
import { getWorkspaceTimeline } from '@/services/timeline';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import InsightView from './view';
import { mapDataChart } from './service';

function Insight() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { data, isPending, isError } = useQuery({
    queryFn: ({ signal }) => getWorkspaceTimeline({ workspaceId: workspace._id!, signal }),
    queryKey: ['Insight'],
  });
  const mappedData = mapDataChart(data);

  return <InsightView data={mappedData} originData={data} isLoading={isPending} isError={isError} />;
}

export default Insight;
