import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

type HeaderProps = {
  onLanguageChange: (lang: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/">Home</Link></li>
          <li className="header__nav-item"><Link to="/about">About</Link></li>
          <li className="header__nav-item"><Link to="/projects">Projects</Link></li>
          <li className="header__nav-item"><Link to="/contact">Contact</Link></li>
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
