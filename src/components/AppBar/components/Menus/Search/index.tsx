import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Popper from '@mui/material/Popper';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useColorScheme } from '@mui/material';
import Results from './components/Results';

function Search() {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';

  const open = Boolean(anchorEl);
  const id = open ? 'search-popper' : undefined;

  const handleCloseResults = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.relatedTarget) {
      setAnchorEl(null);
    }
  };

  return (
    <>
      <TextField
        id={id}
        placeholder="Search..."
        type="text"
        size="small"
        value={search}
        sx={{
          minWidth: '120px',
          maxWidth: '220px',
          '& label': {
            color: textColor,
            '&.Mui-focused': {
              color: textColor,
            },
          },
          '& input': {
            color: textColor,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: textColor,
            },
            '&:hover fieldset': {
              borderColor: textColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: textColor,
            },
          },
        }}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={(e) => setAnchorEl(e.currentTarget)}
        onBlur={handleCloseResults}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: textColor }} />
            </InputAdornment>
          ),
        }}
      />
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom">
        <Card
          sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#282e33' : 'white'),
            minWidth: '500px',
          }}
        >
          <Results search={search} />
        </Card>
      </Popper>
    </>
  );
}

export default Search;
