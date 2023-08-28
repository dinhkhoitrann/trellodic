import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { CssVarsThemeOptions } from '@mui/material/styles';

export type CustomThemeOptions = CssVarsThemeOptions & {
  customProps: {
    appBarHeight: string;
    boardBarHeight: string;
  };
};

const theme = extendTheme({
  colorSchemes: {
    //* NOTE: custom light and dark theme
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
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
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
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
