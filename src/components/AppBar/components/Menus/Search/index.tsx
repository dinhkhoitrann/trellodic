import { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import { useColorScheme } from '@mui/material';
import { TextField, Box, Card, InputAdornment, Popper, Typography } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';
import Results from './components/Results';

function Search() {
  const [search, setSearch] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const { mode } = useColorScheme();
  const customTheme = useCustomTheme();
  const textColor = mode === 'dark' ? customTheme.colors.textInDarkMode : customTheme.colors.textInLightMode;

  const handleCloseResults = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.relatedTarget) {
      setAnchorEl(null);
    }
  };

  return (
    <>
      <TextField
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
      <Popper open={open} anchorEl={anchorEl} placement="bottom">
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
