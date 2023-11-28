import { useQuery } from '@tanstack/react-query';
import PercentageTaskAssigneeView from './view';
import { getPercentageTaskAssignee } from '@/services/chart';

function PercentageTaskAssignee() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['PercentageTaskAssignee'],
    queryFn: getPercentageTaskAssignee,
    staleTime: 60000,
  });

  return <PercentageTaskAssigneeView data={data} isLoading={isLoading} isError={isError} />;
}

export default PercentageTaskAssignee;
