import React from 'react';
import './About.css';


import { useTranslation } from 'react-i18next';
import cv from '../../assets/pdf_files/MatanCV.pdf';

const About: React.FC = () => {
  const {t} = useTranslation();
  return (
    <section className="about-section">
      <embed src={`${cv}#toolbar=0`} type="application/pdf" width="70%" height="600px" />

      <div className="download-button">
        <a href={cv} download="Matan_Balestra_Resume.pdf">
          {t('downloadResume')}
        </a>
      </div>
    </section>
  );
};

export default About;