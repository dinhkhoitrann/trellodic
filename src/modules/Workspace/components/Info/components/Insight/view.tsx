import Image from 'next/image';
import { Chart } from 'react-google-charts';
import { useColorScheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { useView } from '@/hooks';
import { useCustomTheme } from '@/common/styles/theme';
import { SELECT_OPTIONS } from './constants';

type GanntChartViewProps = {
  data: [];
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
  onTimeChange: (_time: string) => void;
};

function InsightView({ data, isIdle, isLoading, isError, onTimeChange }: GanntChartViewProps) {
  const { mode } = useColorScheme();
  const customTheme = useCustomTheme();
  const textColor = mode === 'dark' ? 'white' : '#121212';
  const backgroundColor = mode === 'dark' ? customTheme.colors.bgDark : 'white';

  const view = useView({ data, isLoading, isError });

  const renderChart = () => {
    if (isIdle)
      return (
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Image src="/timeline.png" width={200} height={200} alt="Error" />
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
            Select a specific time option
          </Typography>
        </Box>
      );

    if (view) return view;

    return (
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
    );
  };

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Task timeline tracker
        </Typography>
        <Typography>Follow your work in details with Gannt chart</Typography>
      </Box>
      <Stack direction="row" justifyContent="flex-end" sx={{ my: 2 }}>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel>Time</InputLabel>
          <Select label="Time" onChange={(e) => onTimeChange(e.target.value as string)}>
            {SELECT_OPTIONS.map((option) => (
              <MenuItem key={option.key} value={option.key}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {renderChart()}
    </Box>
  );
}

export default InsightView;
