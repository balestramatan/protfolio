import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './header.css';

type HeaderProps = {
  onLanguageChange: (lang: string) => void;
};

const TabletOrMobileHeader: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="header">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="header__container">
        {isOpen && (
          <nav className={`header__nav`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/" onClick={() => setOpen(false)}>{t('home')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/about" onClick={() => setOpen(false)}>{t('about')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/projects" onClick={() => setOpen(false)}>{t('projects')}</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/contact" onClick={() => setOpen(false)}>{t('contact')}</Link>
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
