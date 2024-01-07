import { useState } from 'react';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useColorScheme } from '@mui/material';
import { useCustomTheme } from '@/common/styles/theme';
import Results from './components/Results';

function Search() {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { mode } = useColorScheme();
  const customTheme = useCustomTheme();
  const textColor = mode === 'dark' ? customTheme.colors.textInDarkMode : customTheme.colors.textInLightMode;

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
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? customTheme.colors.bgCardDark : theme.palette.common.white,
            minWidth: '500px',
          }}
        >
          {search.trim() ? (
            <Results search={search} onCloseResult={() => setAnchorEl(null)} />
          ) : (
            <Box sx={{ textAlign: 'center', my: 6 }}>
              <Image src="/seo.png" width={150} height={150} alt="Search" />
              <Typography fontWeight={600}>Search cards, boards, workspaces</Typography>
            </Box>
          )}
        </Card>
      </Popper>
    </>
  );
}

export default Search;
