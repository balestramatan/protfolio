import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Header.css';

type HeaderProps = {
  onLanguageChange: (lang: string) => void;
};

const TabletOrMobileHeader: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();


  const nevigateToPage = (page: string) => navigate(page);

  return (
    <header className="header">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="header__container">
        {isOpen && (
          <nav className={`header__nav`}>
            <ul className="header__nav-list">
              <li className="header__nav-item" onClick={() => { 
                setOpen(false) 
                nevigateToPage('/') 
                }}
              >
                  <a>{t('home')}</a>
              </li>
              <li className="header__nav-item" onClick={() => {
                setOpen(false)
                nevigateToPage('/about') 
                }}
              >
                  <a>{t('about')}</a>
              </li>
              <li className="header__nav-item" onClick={() => {
                setOpen(false)
                nevigateToPage('/projects') 
                }}
              >
                  <a>{t('projects')}</a>
              </li>
              <li className="header__nav-item" onClick={() => {
                setOpen(false)
                nevigateToPage('/contact') 
                }}
              >
                  <a>{t('contact')}</a>
              </li>
            </ul>
            <div className="header__language">
              <button className="header__language-btn" onClick={() => onLanguageChange('en')}>🇺🇸</button>
              <button className="header__language-btn" onClick={() => onLanguageChange('he')}>🇮🇱</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default TabletOrMobileHeader;
