import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@/components/AppBar';
import BoardBar from '../Bar';
import BoardContent from '../Content';
import { mockData } from '@/apis/mock-data';

function Board() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  );
}

export default Board;
