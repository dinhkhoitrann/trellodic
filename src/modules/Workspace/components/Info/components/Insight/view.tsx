import { Chart } from 'react-google-charts';
import { useColorScheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useView } from '@/hooks';

type GanntChartViewProps = {
  data: [];
  isLoading: boolean;
  isError: boolean;
};

function InsightView({ data, isLoading, isError }: GanntChartViewProps) {
  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? 'white' : '#121212';
  const backgroundColor = mode === 'dark' ? '#24272b' : 'white';

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
        chartType="Timeline"
        width="100%"
        height="100%"
        style={{ backgroundColor: '#bdc3c7', overflowY: 'auto' }}
        data={data}
        options={{
          height: 300,
          theme: 'material',
          timeline: {
            rowLabelStyle: { fontName: 'Helvetica', fontSize: 16, color: textColor },
            barLabelStyle: { fontName: 'Helvetica', fontSize: 14 },
          },
          backgroundColor: backgroundColor,
        }}
      />
    </Box>
  );
}

export default InsightView;
