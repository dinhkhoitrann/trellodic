import { useRef } from 'react';
import { Box, Button, Typography } from '@/components/UIElements';

type SummaryViewProps = {
  completion: string;
  isLoading: boolean;
  onSummaryTodos: () => void;
};

function SummaryView({ completion, isLoading, onSummaryTodos }: SummaryViewProps) {
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
      <Button variant="contained" sx={{ mt: 2 }} disabled={isLoading} onClick={onSummaryTodos}>
        Summary
      </Button>
      <Box ref={summariedTextRef} />
    </Box>
  );
}

export default SummaryView;
