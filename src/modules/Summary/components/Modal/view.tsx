import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useEffect, useRef } from 'react';

type SummaryModalViewProps = {
  isSummarizing: boolean;
  generatedData: any;
  onSummary: () => void;
};

function SummaryModalView({ isSummarizing, generatedData, onSummary }: SummaryModalViewProps) {
  const resultBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resultBlockRef.current || !generatedData) return;
    resultBlockRef.current.innerHTML = generatedData?.data?.content;
  }, [generatedData]);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Summarize
      </Typography>
      <Typography>
        We&apos;ve harnessed the power of artificial intelligence to organize and categorize your todos for a more
        efficient and productive day. Now, let&apos;s dive into a comprehensive summary of your tasks, including overdue
        todos, expiring todos, and in-progress tasks across different categories. This smart overview will help you stay
        on top of your to-do list effortlessly
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, display: 'block', mx: 'auto' }}
        disabled={isSummarizing}
        onClick={onSummary}
      >
        {isSummarizing ? 'Summarizing' : 'Summary now'}
      </Button>
      <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
        <Stack
          sx={{
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'rgb(25, 195, 125)',
            borderRadius: '4px',
          }}
        >
          <Image src="/gpt.svg" alt="GPT" width={26} height={26} color="white" />
        </Stack>
        <Box sx={{ flex: 1 }}>
          {isSummarizing && (
            <>
              <Typography sx={{ fontStyle: 'italic', mb: 2 }}>GPT is summarizing tasks for you...</Typography>
              <Skeleton />
              <Skeleton width="60%" />
            </>
          )}
          <Box ref={resultBlockRef} />
        </Box>
      </Stack>
    </Box>
  );
}

export default SummaryModalView;
