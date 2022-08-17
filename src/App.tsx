import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocIframe from './components/Document/Document';
import Contact from './components/Contact/Contact';
import Redirect from './components/Redirect/Redirect';
import './App.css';
import Projects from './components/Projects/Projects';
import Layout from './components/Layout/Layout';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<DocIframe />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
