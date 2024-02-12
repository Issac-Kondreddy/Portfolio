import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectsTimeline from './components/ProjectsTimeline';
import Publications from './components/Publications';
import TravelSection from './components/TravelSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section id="about-me"><AboutMe /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><ProjectsTimeline /></section>
        <section id="publications"><Publications /></section>
        <section id="travel-photos"><TravelSection /></section>
      </div>
    </div>
  );
}




export default App;
