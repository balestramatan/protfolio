import React from 'react';
import './TechStack.css'; // or './TechStack.scss'

const TechStack: React.FC = () => {
  return (
    <div className="tech-stack">
      <div className="tech-stack__marquee">
        <div className="tech-stack__items">
          <div className="tech-stack__item">React</div>
          <div className="tech-stack__item">TypeScript</div>
          <div className="tech-stack__item">Node.js</div>
          <div className="tech-stack__item">Docker</div>
          <div className="tech-stack__item">AWS</div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;