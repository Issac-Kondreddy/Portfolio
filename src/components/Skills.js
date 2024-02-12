import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faServer, 
  faDatabase, 
  faBrain, 
  faBookOpen, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css'; // Ensure the CSS file path is correct

const SkillsSection = () => {
  // Define your skills and corresponding icons
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python'],
      icon: faCode,
    },
    {
      title: 'Backend Development',
      skills: ['Python (Django)'],
      icon: faServer,
    },
    {
      title: 'Database Management',
      skills: ['SQL (MySQL)'],
      icon: faDatabase,
    },
    {
      title: 'Technical Skills',
      skills: [
        'Machine Learning',
        'Advanced Machine Learning',
        'Deep Learning',
        'Quantum Machine Learning',
        'Data Analysis',
        'Federated Learning',
        'Image Processing',
        'Data Structures and Algorithms',
      ],
      icon: faBrain,
    },
    {
      title: 'Libraries and Frameworks',
      skills: [
        'Scikit-Learn',
        'NumPy',
        'Matplotlib',
        'Pandas',
        'Seaborn',
        'Keras',
        'TensorFlow',
        'Qiskit',
        'PennyLane',
        'Scipy',
        'Collections Framework',
      ],
      icon: faBookOpen,
    },
    {
      title: 'Soft Skills',
      skills: [
        'Strong Communication',
        'Teamwork',
        'Problem-Solving',
        'Adaptability',
      ],
      icon: faUsers,
    },
  ];

  // Function to render skill cards with icons
  const renderSkillCards = (category) => (
    <div className="skill-card" key={category.title}>
      <FontAwesomeIcon icon={category.icon} size="2x" />
      <h3>{category.title}</h3>
      {category.skills.map(skill => (
        <p key={skill}>{skill}</p>
      ))}
    </div>
  );

  return (
    <section id="skills-section">
      <h2>Professional Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(renderSkillCards)}
      </div>
    </section>
  );
};

export default SkillsSection;
