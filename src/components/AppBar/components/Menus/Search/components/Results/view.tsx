import Image from 'next/image';
import { Box, CircularProgress, Typography } from '@/components/UIElements';
import { SearchResults } from '@/types/search.type';
import Cards from '../Cards';
import Boards from '../Boards';
import Workspaces from '../Workspaces';

type ResultsViewProps = {
  results: SearchResults | undefined;
  isSearching: boolean;
  onCloseResult: () => void;
};

function ResultsView({ results, isSearching, onCloseResult }: ResultsViewProps) {
  const renderResults = () => {
    if (!results) {
      return (
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Image src="/robot.png" width={150} height={150} alt="Something went wrong" />
          <Typography fontWeight={600}>Something went wrong, please try again</Typography>
        </Box>
      );
    }

    if (results.cards.length === 0 && results.boards.length === 0 && results.workspaces.length === 0) {
      return (
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Image src="/not-found.png" width={150} height={150} alt="No results found" />
          <Typography fontWeight={600}>No results found</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Cards cards={results.cards} onCloseResult={onCloseResult} />
        <Boards boards={results.boards} onCloseResult={onCloseResult} />
        <Workspaces workspaces={results.workspaces} onCloseResult={onCloseResult} />
      </Box>
    );
  };

  return (
    <>
      {isSearching ? (
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <CircularProgress size={30} />
        </Box>
      ) : (
        renderResults()
      )}
    </>
  );
}

export default ResultsView;
