import { Box, Stack, Typography } from '@/components/UIElements';
import { withBoard, BoardGlobalProps } from '@/hocs';

function LabelItem({ color }: { color: string }) {
  return <Box sx={{ width: '50px', height: '40px', bgcolor: color, borderRadius: '4px' }} />;
}

function LabelsView({ card }: BoardGlobalProps) {
  if (!card.labels || card.labels.length === 0) {
    return <></>;
  }

  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Labels</Typography>
      <Stack direction="row" spacing={1}>
        {card.labels.map((label) => (
          <LabelItem key={label._id} color={label.color} />
        ))}
      </Stack>
    </Box>
  );
}

export default withBoard(LabelsView);
