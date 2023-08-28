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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
          '& fieldset': {
            borderWidth: '1px !important',
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894',
          },
        },
      },
    },
  },
  customProps: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
  },
} as CustomThemeOptions);

export default theme;
