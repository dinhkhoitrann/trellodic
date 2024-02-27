import Image from 'next/image';
import { Chart } from 'react-google-charts';
import { useColorScheme } from '@mui/material';
import { Box, Typography } from '@/components/UIElements';
import { useView } from '@/hooks';
import { EXTRA_PADDING, TRACK_HEIGHT } from './constants';
import './styles.css';
import { isEmpty } from 'lodash';

type GanntChartViewProps = {
  data: any[];
  originData: any;
  isLoading: boolean;
  isError: boolean;
};

export default function GanntChartView({ data, originData, isLoading, isError }: GanntChartViewProps) {
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
      {isEmpty(originData) ? (
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Image src="/no-statistic.png" width={200} height={200} alt="No statistic found" />
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
            No statistic found
          </Typography>
        </Box>
      ) : (
        <Chart
          chartType="Gantt"
          width="100%"
          height={data.length * TRACK_HEIGHT + EXTRA_PADDING}
          data={data}
          options={{
            theme: 'material',
            gantt: {
              trackHeight: TRACK_HEIGHT,
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
      )}
    </Box>
  );
}
