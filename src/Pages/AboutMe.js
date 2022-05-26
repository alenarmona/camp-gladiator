import React from 'react';
import profilePic from '../Assets/Images/alejandro-narmona.jpg';
import linkedin from '../Assets/Images/icons/linkedin.svg';
import github from '../Assets/Images/icons/github.svg';

const AboutMe = () => (
  <div className="page-about-me">
    <h1>About Me</h1>
    <img src={profilePic} alt="Alejandro Narmomna" />
    <h2>Alejandro Narmona</h2>
    <p>Buenos Aires | Argentina</p>
    <p><a href="mailto:alejandro.narmona@gmail.com">alejandro.narmona@gmail.com</a></p>
    <ul>
        <li>
          <a href="https://www.linkedin.com/in/alenarmona" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li>
        <a href="https://github.com/alenarmona/camp-gladiator" target="_blank" rel="noreferrer">
            <img src={github} alt="LinkedIn" />
          </a>
        </li>
    </ul>

  </div>
);

export default AboutMe;