import { useCompletion } from 'ai/react';
import SummaryView from './view';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { mapColumnsToSubmit } from './service';

function Summary({ board }: BoardGlobalProps) {
  const { complete, completion, isLoading } = useCompletion({ api: '/api/summary' });

  const handleSummaryTodos = () => {
    const todosByCategories = mapColumnsToSubmit(board.columns);
    complete(JSON.stringify(todosByCategories));
  };

  return <SummaryView completion={completion} isLoading={isLoading} onSummaryTodos={handleSummaryTodos} />;
}

export default withBoard(Summary);
