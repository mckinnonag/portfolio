import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// defines darkmode or lightmode as the default
const m: PaletteMode = 'light';

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: '#455a64',
              },
              secondary: {
                main: '#ef5350',
              },
              background: {
                default: '#fafafa',
                paper: '#ffffff',
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: '#cfd8dc',
              },
              secondary: {
                main: '#ffab91',
              },
            }),
      },
    });

const Theme = createTheme(getDesignTokens(m));

export default Theme;