import React from 'react';
import '../styles/ProjectsTimeline.css'; // Ensure the CSS file path is correct

function ProjectsTimeline() {
  return (
    <section id="projects-timeline">
      <h1>Project Highlights</h1>
      <ul>
        <li className="project-item" style={{ '--accent-color': '#41516C' }}>
          <div className="date">December 2019</div>
          <div className="title">Garbage Metal Separation Truck</div>
          <div className="descr">
            Engineered a waste collection vehicle with a magnetic separation system using Python and Arduino, achieving a 98% efficiency rate in separating metal waste.
          </div>
        </li>
        <li className="project-item" style={{ '--accent-color': '#FBCA3E' }}>
          <div className="date">June 2022</div>
          <div className="title">Real-Time Traffic Signal Detection</div>
          <div className="descr">
            Developed using the YOLO object detection algorithm to reduce traffic congestion, implemented in Python with OpenCV.
          </div>
        </li>
        <li className="project-item" style={{ '--accent-color': '#E24A68' }}>
          <div className="date">October 2022</div>
          <div className="title">Breast Cancer Classification</div>
          <div className="descr">
            Created a classification model with metaheuristic algorithms, improving early detection rates, using Scikit-learn and TensorFlow.
          </div>
        </li>
        <li className="project-item" style={{ '--accent-color': '#1B5F8C' }}>
          <div className="date">January 2023</div>
          <div className="title">Quantum Learning for Alzheimer’s</div>
          <div className="descr">
            Researched quantum machine learning techniques for Alzheimer’s disease classification, analyzing medical imaging data with Qiskit and TensorFlow Quantum.
          </div>
        </li>
        <li className="project-item" style={{ '--accent-color': '#4CADAD' }}>
          <div className="date">May 2023</div>
          <div className="title">Hybrid Model for ECG Classification</div>
          <div className="descr">
            Liaised a hybrid model combining deep learning with quantum computing for ECG signal classification using TensorFlow and Qiskit.
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ProjectsTimeline;
