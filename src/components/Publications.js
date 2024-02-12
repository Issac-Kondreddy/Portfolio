import React from 'react';
import '../styles/Publications.css'; // Make sure this path is correct

const publications = [
  {
    title: "Quanvolution Neural Network to Recognize arrhythmia from 2D scaleogram features of ECG signals",
    authors: "Sridevi S, Kanimozhi T, Issac K, Sudha M",
    publicationDate: "2022/4/1",
    conference: "2022 International Conference on Innovative Trends in Information Technology (ICITIIT)",
    description: "Quantum computing is the main emerging technology solving complex problems and even though error raised will be high, can be computed using customized algorithms...",
    link: "https://ieeexplore.ieee.org/abstract/document/9744224",
  },
  {
    title: "A study on real world implementation and future trends of internet of things",
    authors: "K Issac, G Pranay, N Bharanidharan, Harikumar Rajaguru",
    publicationDate: "2020/10/7",
    conference: "2020 Fourth International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud)(I-SMAC)",
    pages: "357-361",
    publisher: "IEEE",
    description: "In the world of technology, people are competitive, internet empowering us with lots of new techniques...",
    link: "https://ieeexplore.ieee.org/abstract/document/9243551",
  },
  {
    title: "Investigation on enhancing the binary classification accuracy of supervised classifiers using various transforms",
    authors: "K Issac, K Bharadwaj, N Bharanidharan, Harikumar Rajaguru",
    publicationDate: "2021/3/1",
    journal: "IOP Conference Series: Materials Science and Engineering",
    volume: "1084",
    issue: "1",
    pages: "012032",
    publisher: "IOP Publishing",
    description: "The Classification is used for testing instances where the unknown class labels are assigned where the predictor features are known...",
    link: "https://iopscience.iop.org/article/10.1088/1757-899X/1084/1/012032/meta",
  },
  {
    title: "A Review: The Success of Tesla from 2003 to 2022",
    authors: "S. Abhinav Karthik K. Issac",
    publicationDate: "2022/4",
    journal: "International Research Journal of Engineering and Technology",
    volume: "9",
    issue: "04",
    pages: "6",
    publisher: "IRJET",
    description: "This paper reviews the success story of Tesla, exploring key milestones and technological innovations...",
    link: "https://www.irjet.net/archives/V9/i4/IRJET-V9I4345.pdf",
  },
  {
    title: "Feature Selection Using Elephant Herding Optimization Hybridized with Gray Wolf Optimization for Anomaly Detection in Wafer Manufacturing",
    authors: "K Issac, N Bharanidharan, Harikumar Rajaguru",
    publicationDate: "2022",
    conference: "Advanced Computational Paradigms and Hybrid Intelligent Computing: Proceedings of ICACCP 2021",
    pages: "515-522",
    publisher: "Springer Singapore",
    description: "Machine learning algorithms are commonly used in many applications, and their usage in manufacturing industries is very crucial...",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-4369-9_50",
  },
  {
    title: "Improving the Performance metrics of Binary Classification Models with Different Transforms",
    authors: "K. Sahana K. Issac, S. Abhinav Karthik",
    publicationDate: "2021/6",
    journal: "International Research Journal of Engineering and Technology",
    volume: "8",
    issue: "Issue 6",
    pages: "4",
    publisher: "IRJET",
    link: "https://www.irjet.net/archives/V8/i6/IRJET-V8I6112.pdf",
  }
];

const PublicationCard = ({ title, authors, publicationDate, conference, journal, volume, issue, pages, publisher, description, link }) => (
  <div className="publication-card">
    <h3>{title}</h3>
    <p className="authors">{authors}</p>
    <p className="publication-date">{publicationDate}</p>
    {conference && <p className="conference">{conference}</p>}
    {journal && (
      <p className="journal">
        {journal}, Vol. {volume}, Issue {issue}, pp. {pages}, {publisher}
      </p>
    )}
    <p className="description">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="publication-link">Read Publication</a>
  </div>
);

const Publications= () => (
  <section id="publications-section">
    <h2>Publications</h2>
    <div className="publications-grid">
      {publications.map((publication, index) => (
        <PublicationCard key={index} {...publication} />
      ))}
    </div>
  </section>
);

export default Publications;
