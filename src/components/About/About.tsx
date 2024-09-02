import React from 'react';

import cv from '../../assets/pdf_files/MatanCV.pdf';

import './About.css';

const About: React.FC = () => {
  return (
    // <section className="about-section">
       <object data={cv} type="application/pdf" width="95%" height="100%" />
    // </section>
  );
};

export default About;