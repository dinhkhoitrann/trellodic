import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@/components/AppBar';
import BoardBar from '../Bar';
import BoardContent from '../Content';

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
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;
