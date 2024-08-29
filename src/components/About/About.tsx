import React from 'react';
import './About.css'; // or './About.scss'

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate full-stack developer with experience in creating responsive and dynamic web applications.
        My goal is to transform ideas into reality through efficient and scalable code.
      </p>
    </section>
  );
};

export default About;