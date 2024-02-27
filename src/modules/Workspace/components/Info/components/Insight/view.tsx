import { isEmpty } from 'lodash';
import { Chart } from 'react-google-charts';
import Image from 'next/image';
import { useColorScheme } from '@mui/material';
import { Box, Typography } from '@/components/UIElements';
import { useView } from '@/hooks';
import { useCustomTheme } from '@/common/styles/theme';

type GanntChartViewProps = {
  data: any[];
  originData: any;
  isLoading: boolean;
  isError: boolean;
};

function InsightView({ data, originData, isLoading, isError }: GanntChartViewProps) {
  const { mode } = useColorScheme();
  const customTheme = useCustomTheme();
  const textColor = mode === 'dark' ? 'white' : '#121212';
  const backgroundColor = mode === 'dark' ? customTheme.colors.bgDark : 'white';

  const view = useView({ data, isLoading, isError });
  if (view) return view;

  if (isEmpty(originData)) {
    return (
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Image src="/no-statistic.png" width={200} height={200} alt="No statistic found" />
        <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
          No statistic found
        </Typography>
      </Box>
    );
  }

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
        height={data.length * 30 + 30}
        style={{ backgroundColor: '#bdc3c7', overflowY: 'auto' }}
        data={data}
        options={{
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
