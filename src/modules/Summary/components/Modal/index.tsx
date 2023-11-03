import { useMutation } from '@tanstack/react-query';
import { useColorScheme } from '@mui/material/styles';
import SummaryModalView from './view';
import { generateSummary } from '@/services/summary';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { mapColumnsToSubmit } from './service';

function SummaryModal({ board }: BoardGlobalProps) {
  const {
    mutate: generateSummaryMutation,
    data,
    isPending,
  } = useMutation({
    mutationFn: generateSummary,
  });
  const { mode } = useColorScheme();

  const handleSummary = () => {
    const formattedColumns = mapColumnsToSubmit(board.columns);
    generateSummaryMutation({ categories: formattedColumns, stylingMode: mode || 'light' });
  };

  return <SummaryModalView isSummarizing={isPending} generatedData={data} onSummary={handleSummary} />;
}

export default withBoard(SummaryModal);
