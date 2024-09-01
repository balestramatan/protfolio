import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroProfilePic from '../../assets/images/profile-image-matan.png';
import AutoPlayCarousel from '../AutoPlayCarousel/AutoPlayCarousel';
import techStack from '../TechStack/TechStack';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{t('hello')}</h1>
          <p>{t('fullStackDeveloper')}</p>
          <p>{t('introduce')}</p>
        </div>
        <div className="hero-image">
          <img src={HeroProfilePic} alt="Profile Picture" />
        </div>
      </div>

      <AutoPlayCarousel speed={80} direction='left'>
        {techStack.map((element) => (
          <div key={element.title} className="contentBlock contentBlock--one">
            {element.imageUrl}
          </div>
        ))}
      </AutoPlayCarousel>
    </section>
  );
};

export default Hero;
