import React from 'react';
import '../styles/AboutMe.css'; // This navigates up one level from components to
import profilePic from '../assests/Snow.jpeg';
import scholarIcon from '../assests/scholar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div id="about-me" className="card">
      <div className="card-avatar" style={{ backgroundImage: `url(${profilePic})` }}></div>
      <div className="card-info">
        <h2 className="card-title">Issac Kondreddy</h2>
        <p className="card-subtitle">A Masters Student in Computer Science</p>
        <div className="about-me-content">
      <p>
          Hello! I'm Issac Kondreddy, a passionate developer specializing in Machine Learning, AI, and Python Development. 
          My journey in tech began at University of Central Missouri where I developed a deep interest in  Artificial Intelligence.
        </p>
        <p>
          Over the years, I've honed my skills through various projects and challenges, focusing on Machine Learning, Deep Learning, Quantum Machine learning, Computational Intelligence.
          I'm always eager to learn new technologies and apply them to solve real-world problems.
        </p>
        <p>
          When I'm not coding, you can find me exploring new places, capturing moments through my camera, and indulging in Travelling, Chess, Badminton.
        </p>
        <p>
          I'm excited to showcase my journey and the projects I've worked on. Feel free to scroll through my portfolio to learn more about my expertise and experiences!
        </p>
      </div>
      </div>
      
      <div className="card-social">
      <ul className="card-social__list">
        <li className="card-social__item">
          <a href="https://www.instagram.com/issac_.36/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li className="card-social__item">
          <a href="https://www.linkedin.com/in/issac-kondreddy-8270851b9/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </li>
        <li className="card-social__item">
          <a href="https://github.com/Issac-Kondreddy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li className="card-social__item">
          <a href="mailto:issackondreddy@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </li>
        <li className="card-social__item">
          <a href="https://scholar.google.com/citations?user=7WhdH44AAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">
            <img src={scholarIcon} alt="Google Scholar" />
          </a>
        </li>
        </ul>
      </div></div>
  );
  }

export default AboutMe;