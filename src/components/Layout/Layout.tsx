import * as React from 'react';
import Nav from '../Nav/Nav';
import Box from '@mui/material/Box';
import Header from '../Header/Header';

function Layout (props: any) {
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
          }}>
            <Nav/>
            <Box sx={{
                maxWidth: '1000px',
                mx: 'auto',
            }}>
                <Header />
                <Box sx={{ mt: '50px' }}>
                    {props.children}
                </Box>
            </Box>
      </Box>
    );
  }

export default Layout;