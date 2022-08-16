import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import DocIframe from './components/Document/Document';
import Contact from './components/Contact/Contact';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Cards/Projects';
import Navbar from './components/Nav/Navbar';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box sx={{
            height: '100vh',
            width: '100vw',
          }}>
        <BrowserRouter>
          <Navbar />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
              
              <Routes>
                <Route path="/" element={
                  <>
                    <img src={logo} className="App-logo" alt="logo" />
                  </>
                  } />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<DocIframe />} />
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
            </Box>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
