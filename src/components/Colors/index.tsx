import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type ColorsProps = {
  colors: string[];
  selectedColor: string;
  onSelect: (_color: string) => void;
};

function Colors({ colors, selectedColor, onSelect }: ColorsProps) {
  return (
    <Grid container spacing={1}>
      {colors.map((color, index) => (
        <Grid key={index} item>
          <Box
            sx={{
              border: selectedColor === color ? '2px solid #579dff' : '2px solid transparent',
              borderRadius: '4px',
              padding: '2px',
            }}
          >
            <Box
              sx={{
                width: '50px',
                height: '35px',
                bgcolor: color,
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => onSelect(color)}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Colors;
