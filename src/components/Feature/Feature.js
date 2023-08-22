import React from "react";
import "./Feature.scss";

const Feature = ({ Icon, title, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <Icon />
      </div>
      <div className="feature-description">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-text">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
