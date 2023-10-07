import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import withBoard, { BoardGlobalProps } from '@/hocs/withBoard';

function LabelItem({ color }: { color: string }) {
  return <Box sx={{ width: '50px', height: '40px', bgcolor: color, borderRadius: '4px' }} />;
}

function LabelsView({ card }: BoardGlobalProps) {
  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Labels</Typography>
      <Stack direction="row" spacing={1}>
        {card.labels?.map((label) => (
          <LabelItem key={label._id} color={label.color} />
        ))}
      </Stack>
    </Box>
  );
}

export default withBoard(LabelsView);
