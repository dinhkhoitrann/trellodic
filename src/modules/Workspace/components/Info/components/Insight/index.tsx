import { useQuery } from '@tanstack/react-query';
import { getWorkspaceTimeline } from '@/services/timeline';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import InsightView from './view';

function Insight() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['Insight_Workspace'],
    queryFn: () => getWorkspaceTimeline({ workspaceId: workspace._id! }),
    staleTime: 5 * 60000,
    gcTime: 5 * 60000,
    refetchOnMount: true,
  });
  return <InsightView data={data} isLoading={isLoading} isError={isError} />;
}

export default Insight;
