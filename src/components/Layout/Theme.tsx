import * as React from 'react';
import { createTheme, ThemeOptions, ThemeProvider, styled } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
      primary: {
        main: '#455a64',
        light: '#718792',
        dark: '#1c313a',
      },
      secondary: {
        main: '#f50057',
        light: '#F73378',
        dark: '#AB003C',
      },
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
    },
  });

export default Theme;