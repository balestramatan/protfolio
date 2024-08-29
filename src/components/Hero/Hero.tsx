import React from 'react';
import './Hero.css';

import HeroProfilePic from '../../assets/images/profile-image-matan.png';
import AutoPlayCarousel from '../AutoPlayCarousel/AutoPlayCarousel';

const techStack = [
  { title: "React", imageUrl: "https://example.com/images/react.png" },
  { title: "HTML", imageUrl: "https://example.com/images/html.png" },
  { title: "SCSS", imageUrl: "https://example.com/images/scss.png" },
  { title: "JavaScript", imageUrl: "https://example.com/images/javascript.png" },
  { title: "TypeScript", imageUrl: "https://example.com/images/typescript.png" },
  { title: "Python", imageUrl: "https://example.com/images/python.png" },
  { title: "Flask", imageUrl: "https://example.com/images/flask.png" },
  { title: "MySQL", imageUrl: "https://example.com/images/mysql.png" },
  { title: "Elasticsearch", imageUrl: "https://example.com/images/elasticsearch.png" },
  { title: "Docker", imageUrl: "https://example.com/images/docker.png" },
  { title: "MobX", imageUrl: "https://example.com/images/mobx.png" },
  { title: "MongoDB", imageUrl: "https://example.com/images/mongodb.png" },
  { title: "Express", imageUrl: "https://example.com/images/express.png" },
  { title: "Node.js", imageUrl: "https://example.com/images/nodejs.png" },
  { title: "AWS", imageUrl: "https://example.com/images/aws.png" }
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero full-height">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello World, I'm Matan Balestra</h1>
          <p>A Full Stack Developer</p>
          <p>With four years of hands-on experience in software development, I thrive on turning complex challenges into elegant user-friendly solutions. I am a highly motivated software developer offering uncompromising professionalism, creativity, and a commitment to achieving and exceeding defined goals.</p>
        </div>
        <div className="hero-image">
          <img src={HeroProfilePic} alt="Your Name" />
        </div>
      </div>

      <AutoPlayCarousel speed={50} direction="right">
            {techStack.map(element => {
                return(
                    <div className="contentBlock contentBlock--one">
                        {element.title}
                    </div>
                )
            })}
      </AutoPlayCarousel>
    </section>
  );
};

export default Hero;