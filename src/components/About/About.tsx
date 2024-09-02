import React from 'react';

import cv from '../../assets/pdf_files/MatanCV.pdf';

import { useTranslation } from 'react-i18next';
import './About.css';

const About: React.FC = () => {
  const {t} = useTranslation();
  return (
    <section className='about-section'>
      <object data={cv} type="application/pdf" width="95%" height="95%" />

      <div className="download-button">
          <a href={cv} download="Matan_Balestra_Resume.pdf">
            {t('downloadResume')}
          </a>
      </div>
    </section>
  );
};

export default About;