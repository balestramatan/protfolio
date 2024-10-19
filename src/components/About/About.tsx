import React from 'react';
import { useTranslation } from 'react-i18next';
import cv from '../../assets/pdf_files/matan_balestra_cv.pdf';
import './About.css';


const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='about-section'>
      <object data={`${cv}`} type="application/pdf" width="100%" height="100%"/>
      <div className="download-button">
        <a href={cv} download="Matan_Balestra_Resume.pdf">
          {t('downloadResume')}
        </a>
      </div>
    </section>
  );
};

export default About;