import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Layout>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/portfolio' element={<Landing />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
