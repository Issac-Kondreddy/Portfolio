import React from 'react';
import '../styles/Education.css'; // Update the path if necessary

function Education() {
  return (
    <section id="education">
      <h2>Education Timeline</h2>
      <div className="timeline-container">
        {/* Each "timeline-block" represents an educational milestone */}
        <div className="timeline-block">
          <div className="timeline-dot"></div>
          <h3>Master of Science in CS (On-going)</h3>
          <span className="timeline-date">2023 - Present</span>
          <p>University of Central Missouri - GPA: 3.66</p>
        </div>

        <div className="timeline-block">
          <div className="timeline-dot"></div>
          <h3>B.Tech in Electronics</h3>
          <span className="timeline-date">2019 - 2023</span>
          <p>Vel Tech University - GPA: 9.1</p>
        </div>

        <div className="timeline-block">
          <div className="timeline-dot"></div>
          <h3>Intermediate (Science Stream)</h3>
          <span className="timeline-date">2017 - 2019</span>
          <p>Sri Chaitanya Junior College, Amalapuram - GPA: 9.94</p>
        </div>

        <div className="timeline-block">
          <div className="timeline-dot"></div>
          <h3>10th Class</h3>
          <span className="timeline-date">2016 - 2017</span>
          <p>Jawahar Navodaya Vidyalaya, Yanam - GPA: 10</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
