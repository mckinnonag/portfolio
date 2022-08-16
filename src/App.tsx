import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocIframe from './components/Document/Document';
import Contact from './components/Contact/Contact';
import Redirect from './components/Redirect/Redirect';
import TargetProps from './components/Redirect/target';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Cards/Projects';
import Layout from './components/Layout/Layout';

const gitTarget: TargetProps = {
  target: 'https://www.github.com/mckinnonag',
}
const linkedInTarget: TargetProps = {
  target: 'https://www.linkedin.com/in/mckinnonag/',
}
const mailTarget: TargetProps = {
  target: 'mailto:mckinnonag@gmail.com',
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/portfolio" element={
                  <>
                    <img src={logo} className="App-logo" alt="logo" />
                  </>
                  } />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<DocIframe />} />
                <Route path='/github' element={<Redirect target={gitTarget.target} />} />
                <Route path='/linkedin' element={<Redirect target={linkedInTarget.target} />} />
                <Route path='/mail' element={<Redirect target={mailTarget.target} />} />
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
