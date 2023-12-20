import { useMutation } from '@tanstack/react-query';
import { getWorkspaceTimeline } from '@/services/timeline';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import InsightView from './view';

function Insight() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const {
    mutate: getTimelime,
    data,
    isPending,
    isError,
    isIdle,
  } = useMutation({
    mutationFn: getWorkspaceTimeline,
  });

  const handleTimeChange = (time: string) => {
    getTimelime({ workspaceId: workspace._id!, time });
  };

  return (
    <InsightView data={data} isIdle={isIdle} isLoading={isPending} isError={isError} onTimeChange={handleTimeChange} />
  );
}

export default Insight;
