import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles  } from '@mui/material/';
import Box from '@mui/material/Box';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Theme from './Theme';

const theme = Theme;

function Layout (props: any) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <GlobalStyles styles={{ }}/>
        <Box sx={{
            height: '100vh',
            width: '100vw',
          }}>
            <Nav/>
            <Box sx={{
                maxWidth: '1000px',
                mx: 'auto',
            }}>
                <Box sx={{ mt: '50px' }}>
                    {props.children}
                </Box>
            </Box>
        </Box>
      </ThemeProvider>
    );
  }

export default Layout;