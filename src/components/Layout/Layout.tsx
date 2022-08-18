import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles  } from '@mui/material/';
import Box from '@mui/material/Box';
import Nav from '../Nav/Nav';
import Theme from './Theme';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const theme = Theme;

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/mckinnonag">
          Alex McKinnon
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Layout (props: any) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <GlobalStyles styles={{ }}/>
        <Nav/>
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
                >
                {props.children}
            </Box>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }

export default Layout;