import { useCompletion } from 'ai/react';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { mapColumnsToSubmit } from './service';
import SummaryView from './view';

function Summary({ board }: BoardGlobalProps) {
  const { complete, stop, completion, isLoading } = useCompletion({ api: '/api/summary' });

  const handleSummaryTodos = () => {
    const todosByCategories = mapColumnsToSubmit(board.columns);
    complete(JSON.stringify(todosByCategories));
  };

  return <SummaryView completion={completion} isLoading={isLoading} onSummaryTodos={handleSummaryTodos} stop={stop} />;
}

export default withBoard(Summary);
