import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'; // or './Footer.scss'

const Footer: React.FC = () => {
  const {t} = useTranslation();
  return (
    <footer className="footer">
      <p>{t('allRightsReserved')}</p>
    </footer>
  );
};

export default Footer;