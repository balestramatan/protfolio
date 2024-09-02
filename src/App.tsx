import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TabletOrMobileHeader from './components/Header/TabletOrMobileHeader';
import Hero from './components/Hero/Hero';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import ToastComponent from './components/Toast/Toast';
import useLanguage from './hooks/useLanguage';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import './App.css';

const App: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
  
  const { changeLanguage } = useLanguage();
  return (
    <Router>
      <div className="App">
        {isDesktopOrLaptop ? <Header onLanguageChange={changeLanguage}/> : <TabletOrMobileHeader onLanguageChange={changeLanguage}/> }
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastComponent />
    </Router>
  );
};

export default App;