import { BarChart } from '@mui/x-charts/BarChart';
import { useView } from '@/hooks';

type TaskStatusChartViewProps = {
  dataset: { [key: string]: any }[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

function valueFormatter(value: string) {
  if (value.length <= 12) return value;
  return `${value.slice(0, 12)}...`;
}

function TaskStatusChartView({ dataset, isLoading, isError }: TaskStatusChartViewProps) {
  const view = useView({ data: dataset, isLoading, isError });
  if (view) return view;

  return (
    <BarChart
      dataset={dataset}
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
          labelStyle: {
            padding: 100,
          },
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
