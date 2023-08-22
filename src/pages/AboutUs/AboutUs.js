import React from "react";
import AboutTeam from "../../components/AboutUs/AboutTeam";
import aboutUsImg from "../../assets/images/aboutUs.png";
import { ReactComponent as PlayBtn } from "../../assets/images/playPause.svg";

import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="section-aboutUs">
      <div className="img-box">
        <img
          className="aboutus-img"
          src={aboutUsImg}
          alt="A man in suit reading pie-chart"
        />
        <PlayBtn className="play-btn" />
        <AboutTeam />
      </div>
      <div className="about-description-box">
        <div className="aboutus-heading">
          <h2>Make Your Website More User-Friendly for Search Engines</h2>
          <p className="aboutus-description">
            We'll match you with our team of expert strategists who will make
            sure your top-of-the-line strategies are always on target. Contact
            us today to get started!
          </p>
        </div>
        <div className="extra-info">
          <div className="details">
            <p className="number">120K</p>
            <p className="label">Domains indexed</p>
          </div>
          <div className="details">
            <p className="number">8.990</p>
            <p className="label">Project Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
