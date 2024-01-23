import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@/components/UIElements';
import { Theme } from '@/common/enums';
import { useCustomTheme } from '@/common/styles/theme';

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const customTheme = useCustomTheme();
  const textColor = mode === 'dark' ? customTheme.colors.textInDarkMode : 'white';

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value as Theme;
    setMode(selectedMode);
  };

  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel id="label-select-dark-light-mode" sx={{ color: textColor, '&.Mui-focused': { color: textColor } }}>
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        sx={{
          color: textColor,
          '.MuiOutlinedInput-notchedOutline': { borderColor: textColor },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: textColor },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: textColor },
          '.MuiSvgIcon-root': { color: textColor },
        }}
        onChange={handleChange}
      >
        <MenuItem value={Theme.Light}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value={Theme.Dark}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
