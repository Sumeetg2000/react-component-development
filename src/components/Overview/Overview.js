import React from "react";
import overviewChart from '../../assets/images/overview.png'
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <h5>Overview</h5>
      <img src={overviewChart} alt="wave chart representing data for last six months" />
    </div>
  );
};

export default Overview;
