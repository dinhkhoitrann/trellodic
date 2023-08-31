import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';
import { CustomThemeOptions } from '@/common/styles/theme';
import Card from './Card';

function ListCardsView() {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: `calc(${theme.customProps.boardContentHeight} -
          40px - ${theme.customProps.columnHeaderHeight} - ${theme.customProps.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf',
        },
      }}
    >
      <Card />
    </Box>
  );
}

export default ListCardsView;
