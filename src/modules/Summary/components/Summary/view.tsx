import { useRef } from 'react';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { Box, Button, Typography } from '@/components/UIElements';

type SummaryViewProps = {
  completion: string;
  isLoading: boolean;
  onSummaryTodos: () => void;
  stop: () => void;
};

function SummaryView({ completion, isLoading, onSummaryTodos, stop }: SummaryViewProps) {
  const summariedTextRef = useRef<HTMLDivElement>(null);
  if (summariedTextRef.current) {
    summariedTextRef.current.innerHTML = completion;
  }

  return (
    <Box>
      <Typography>
        The summary todos feature is a powerful organizational tool designed to streamline task management and boost
        productivity. This feature allows users to create concise summaries of their to-do lists, condensing detailed
        tasks into brief.
      </Typography>
      <Box sx={{ mt: 2 }}>
        {isLoading ? (
          <Button variant="outlined" startIcon={<StopCircleOutlinedIcon />} onClick={() => stop()}>
            Stop
          </Button>
        ) : (
          <Button variant="contained" onClick={onSummaryTodos}>
            Summary
          </Button>
        )}
      </Box>
      <Box ref={summariedTextRef} />
    </Box>
  );
}

export default SummaryView;
