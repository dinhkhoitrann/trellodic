import { BarChart } from '@mui/x-charts/BarChart';
import { useView } from '@/hooks';

type TaskStatusChartViewProps = {
  dataset: { [key: string]: any }[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

function valueFormatter(value: string) {
  if (value.length <= 10) return value;
  return `${value.slice(0, 10)}...`;
}

function TaskStatusChartView({ dataset, isLoading, isError }: TaskStatusChartViewProps) {
  const view = useView({ data: dataset, isLoading, isError });
  if (view) return view;

  return (
    <BarChart
      dataset={dataset}
      colors={['#2980b9', '#e74c3c', '#2ecc71']}
      yAxis={[
        {
          scaleType: 'band',
          dataKey: 'assignee',
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

export default TaskStatusChartView;
