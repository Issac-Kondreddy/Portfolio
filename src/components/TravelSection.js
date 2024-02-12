import React from 'react';
import '../styles/TravelSection.css'; // Ensure this path is correct
import MunnarCoffee from '../assests/Munnarcoffee.jpg';
import PondiCafe from '../assests/Pondi_cafe.JPG';
import ChurchPondi from '../assests/Church_pondi.jpg';
import Mahabalipuram from '../assests/mahabalipuram.jpg';
import ViewPoint from '../assests/View_Point.jpg';
import TopViewMunnar from '../assests/TopView_Munnar.jpg';
import HelmeckinFalls from '../assests/Helmeckin.jpg';
import Falls from '../assests/Falls.jpg';
import Snow from '../assests/Snow.jpeg';

const TravelSection = () => {
  return (
    <section id="travel-section">
      <h1 className="main-title">My Travel Adventures</h1>
        
      <div className="container">
        <h3 className="title">Munnar</h3>
        <div className="content">
          <a href={TopViewMunnar} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src={TopViewMunnar} alt="Top View Munnar" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Munnar's Breathtaking View</h3>
              <p className="content-text">Captivating views of the lush green hills of Munnar.</p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <h3 className="title">First Snow</h3>
        <div className="content">
          <a href={TopViewMunnar} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src={Snow} alt="Top View Munnar" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">First Snow in Kansas</h3>
              <p className="content-text">Feeling the  cold snow on my face for the first time ever!</p>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <h3 className="title">British Columbia</h3>
        <div className="content">
          <a href={Falls} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src={Falls} alt="Falls" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Majestic Waterfalls</h3>
              <p className="content-text">The awe-inspiring waterfalls of British Columbia.</p>
            </div>
          </a>
        </div>
      </div>

      {/* Additional locations... */}
      {/* Pondicherry, Church Pondi */}
      <div className="container">
        <h3 className="title">Pondicherry</h3>
        <div className="content">
          <a href={ChurchPondi} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src={ChurchPondi} alt="Church in Pondicherry" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Pondicherry's Serenity</h3>
              <p className="content-text">Exploring the tranquil and historical streets of Pondicherry.</p>
            </div>
          </a>
        </div>
      </div>

      {/* Mahabalipuram */}
      <div className="container">
        <h3 className="title">Mahabalipuram</h3>
        <div className="content">
          <a href={Mahabalipuram} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <img className="content-image" src={Mahabalipuram} alt="Mahabalipuram" />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Historic Mahabalipuram</h3>
              <p className="content-text">The ancient architecture and sculptures of Mahabalipuram.</p>
            </div>
          </a>
        </div>
      </div>

      {/* More containers for other images... */}
      {/* Munnar Coffee */}
<div className="container">
  <h3 className="title">Munnar Coffee Plantation</h3>
  <div className="content">
    <a href={MunnarCoffee} target="_blank" rel="noopener noreferrer">
      <div className="content-overlay"></div>
      <img className="content-image" src={MunnarCoffee} alt="Munnar Coffee" />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Coffee and Greenery</h3>
        <p className="content-text">Enjoying the aroma of fresh coffee in the plantations of Munnar.</p>
      </div>
    </a>
  </div>
</div>

{/* Pondi Cafe */}
<div className="container">
  <h3 className="title">Pondicherry Café</h3>
  <div className="content">
    <a href={PondiCafe} target="_blank" rel="noopener noreferrer">
      <div className="content-overlay"></div>
      <img className="content-image" src={PondiCafe} alt="Pondi Cafe" />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Café Vibes</h3>
        <p className="content-text">Relaxing at a cozy café in Pondicherry.</p>
      </div>
    </a>
  </div>
</div>

{/* Helmeckin Falls */}
<div className="container">
  <h3 className="title">Helmeckin Falls</h3>
  <div className="content">
    <a href={HelmeckinFalls} target="_blank" rel="noopener noreferrer">
      <div className="content-overlay"></div>
      <img className="content-image" src={HelmeckinFalls} alt="Helmeckin Falls" />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Nature's Marvel</h3>
        <p className="content-text">Witnessing the spectacular Helmeckin Falls.</p>
      </div>
    </a>
  </div>
</div>

{/* View Point */}
<div className="container">
  <h3 className="title">View Point</h3>
  <div className="content">
    <a href={ViewPoint} target="_blank" rel="noopener noreferrer">
      <div className="content-overlay"></div>
      <img className="content-image" src={ViewPoint} alt="View Point" />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Scenic Beauty</h3>
        <p className="content-text">Capturing the picturesque landscapes from a stunning viewpoint.</p>
      </div>
    </a>
  </div>
</div>
    </section>
  );
};

export default TravelSection;
