import { LineChart } from '@mui/x-charts/LineChart';
import { useView } from '@/hooks';

type CompletedTaskTrendViewProps = {
  data: { [key: string]: any } | undefined;
  isLoading: boolean;
  isError: boolean;
};

function valueFormatter(value: number) {
  return new Date(value).toLocaleDateString();
}

function CompletedTaskTrendView({ data, isLoading, isError }: CompletedTaskTrendViewProps) {
  const view = useView({ data, isLoading, isError });
  if (view) return view;

  const { xAxis, completedTasksByMonth } = data!;
  return (
    <LineChart
      xAxis={[{ data: xAxis, label: 'Date', valueFormatter }]}
      series={[
        {
          data: completedTasksByMonth,
          label: 'Number of tasks completed',
          area: true,
        },
      ]}
      height={500}
    />
  );
}

export default CompletedTaskTrendView;
