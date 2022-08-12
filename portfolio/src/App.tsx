import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import BottomNav from './components/Nav/BottomNav';
import Contact from './components/Contact/Contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path="/home" element={
                <>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Hello, world.
                  </p>
                </>
                } />
              <Route path="/projects" element={<h1>Placeholder projects</h1>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        <>
          <BottomNav></BottomNav>
        </>
        </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
