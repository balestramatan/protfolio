import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './header.css';

type HeaderProps = {
  onLanguageChange: (lang: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const {t} = useTranslation();

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/">{t('home')}</Link></li>
          <li className="header__nav-item"><Link to="/about">{t('about')}</Link></li>
          <li className="header__nav-item"><Link to="/projects">{t('projects')}</Link></li>
          <li className="header__nav-item"><Link to="/contact">{t('contact')}</Link></li>
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
