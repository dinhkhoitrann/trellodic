import { Box, LinearProgress, LinearProgressProps, Typography } from '@/components/UIElements';

type LinearProgressWithLabelProps = LinearProgressProps & { value: number };

function LinearProgressWithLabel(props: LinearProgressWithLabelProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ minWidth: 35, mr: 1 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
