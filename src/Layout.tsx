import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TabletOrMobileHeader from './components/Header/TabletOrMobileHeader';
import ToastComponent from './components/Toast/Toast';
import useLanguage from './hooks/useLanguage';

import './App.css';

const Layout: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' });
  const { changeLanguage } = useLanguage();

  return (
    <div id="app-root" className='app'>
      {isDesktopOrLaptop ? (
        <Header onLanguageChange={changeLanguage} />
      ) : (
        <TabletOrMobileHeader onLanguageChange={changeLanguage} />
      )}
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
      <ToastComponent />
    </div>
  );
};

export default Layout;
