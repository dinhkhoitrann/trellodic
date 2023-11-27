import { BarChart } from '@mui/x-charts/BarChart';
import { useView } from '@/hooks';

type TasksCountViewProps = {
  dataset: { [key: string]: any }[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

function valueFormatter(value: string) {
  if (value.length <= 10) return value;
  return `${value.slice(0, 10)}...`;
}

function TasksCountView({ dataset, isLoading, isError }: TasksCountViewProps) {
  const view = useView({ data: dataset, isLoading, isError });
  if (view) return view;

  return (
    <BarChart
      dataset={dataset}
      yAxis={[
        {
          scaleType: 'band',
          dataKey: 'column',
          valueFormatter,
        },
      ]}
      xAxis={[
        {
          label: 'Number of tasks',
        },
      ]}
      series={[
        { dataKey: 'inProgress', label: 'In Progress' },
        { dataKey: 'overdue', label: 'Overdue' },
        { dataKey: 'completed', label: 'Completed' },
      ]}
      margin={{ left: 100 }}
      height={500}
      layout="horizontal"
    />
  );
}

export default TasksCountView;
