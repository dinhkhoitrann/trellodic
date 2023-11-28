import { PieChart } from '@mui/x-charts/PieChart';
import { useView } from '@/hooks';

type PercentageTaskStatusViewProps = {
  data: { value: number; label: string }[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

function PercentageTaskStatusView({ data, isLoading, isError }: PercentageTaskStatusViewProps) {
  const view = useView({ data, isLoading, isError });
  if (view) return view;

  return (
    <PieChart
      series={[
        {
          data: data!,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: ({ value }) => `${value}%`,
        },
      ]}
      height={300}
    />
  );
}

export default PercentageTaskStatusView;
