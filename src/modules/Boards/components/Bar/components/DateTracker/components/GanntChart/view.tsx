import { Chart } from 'react-google-charts';
import { useColorScheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useView } from '@/hooks';
import './styles.css';

type GanntChartViewProps = {
  data: [];
  isLoading: boolean;
  isError: boolean;
};

export default function GanntChartView({ data, isLoading, isError }: GanntChartViewProps) {
  const { mode } = useColorScheme();
  const trackColor = mode === 'dark' ? '#121212' : 'white';
  const backgroundColor = mode === 'dark' ? '#bdc5cd' : 'white';

  const view = useView({ data, isLoading, isError });
  if (view) return view;

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Task timeline tracker
        </Typography>
        <Typography>Follow your work in details with Gannt chart</Typography>
      </Box>
      <Chart
        chartType="Gantt"
        width="100%"
        height="50%"
        data={data}
        options={{
          height: 400,
          theme: 'material',
          gantt: {
            trackHeight: 30,
            labelStyle: {
              fontName: '"Roboto","Helvetica","Arial",sans-serif',
            },
            innerGridTrack: { fill: trackColor },
            innerGridDarkTrack: { fill: trackColor },
          },
          backgroundColor: {
            fill: backgroundColor,
          } as any,
        }}
      />
    </Box>
  );
}
