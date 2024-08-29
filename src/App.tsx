import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header onLanguageChange={() => {}}/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;