import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { CssVarsThemeOptions } from '@mui/material/styles';
import { cyan, deepOrange, orange, teal } from '@mui/material/colors';

export type CustomThemeOptions = CssVarsThemeOptions & {
  customProps: {
    appBarHeight: string;
    boardBarHeight: string;
  };
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  customProps: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
} as CustomThemeOptions);

export default theme;
