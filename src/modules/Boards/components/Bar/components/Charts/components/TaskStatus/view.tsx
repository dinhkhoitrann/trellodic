import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';

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
  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!dataset || isError) {
    return (
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Image src="/error.png" width={200} height={200} alt="No charts selected" />
        <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
          Something went wrong, please try again
        </Typography>
      </Box>
    );
  }

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
