import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Header.css';

type HeaderProps = {
  onLanguageChange: (lang: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item" onClick={() => navigate('/')}><a>{t('home')}</a></li>
          <li className="header__nav-item" onClick={() => navigate('about')}><a>{t('about')}</a></li>
          <li className="header__nav-item" onClick={() => navigate('projects')}><a>{t('projects')}</a></li>
          <li className="header__nav-item" onClick={() => navigate('contacts')}><a>{t('contact')}</a></li>
        </ul>
      </nav>
      <div className="header__language">
        <button className="header__language-btn" onClick={() => onLanguageChange('en')}>🇺🇸</button>
        <button className="header__language-btn" onClick={() => onLanguageChange('he')}>🇮🇱</button>
      </div>
    </header>
  );
};

export default Header;
