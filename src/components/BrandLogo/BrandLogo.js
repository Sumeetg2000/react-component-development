import React from "react";
import "./BrandLogo.scss";

const BrandLogo = ({ logo }) => {
  return (
    <div className="brand">
      <img className="logo" src={logo} alt="airbnb logo" />
    </div>
  );
};

export default BrandLogo;
